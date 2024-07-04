import { supabase, supabaseUrl } from '../../services/supabase';

export const getTasks = async () => {
  const { data: tasks, error } = await supabase.from('tasks').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return tasks;
};

export const addTask = async (task) => {
  const imageName = `${Math.trunc(Math.random() * 100)}-${
    task.user_photo.name
  }`.replaceAll('/', '');

  const imagePath = `${supabaseUrl}/storage/v1/object/public/users/${imageName}`;

  const { data: newTask, error } = await supabase
    .from('tasks')
    .insert([{ ...task, user_photo: imagePath }]);

  const { error: storageError } = await supabase.storage
    .from('users')
    .upload(imageName, task.user_photo);

  if (error) {
    throw new Error('Couldnt add task');
  }

  if (storageError) {
    await supabase.from('tasks').delete().eq('id', task.id);

    console.error(storageError);
    throw new Error(
      "User image couldn't be uploaded and the task was not added"
    );
  }

  return newTask;
};
