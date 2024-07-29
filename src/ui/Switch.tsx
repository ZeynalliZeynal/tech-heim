import classNames from 'classnames';

const Switch = ({
  onSwitch,
  isSwitched,
}: {
  onSwitch: () => void;
  isSwitched?: boolean;
}) => {
  return (
    <button
      className={classNames(
        'relative rounded-full w-12 inline-flex items-center justify-start h-6 before:absolute before:size-4 before:bg-white before:rounded-full before:m-1 before:top1/2 -before:translate-y-1/2 before:transition-all before:duration-300 before:ease-in-out before:left-0',
        {
          'bg-neutral-gray-400': !isSwitched,
          'before:translate-x-[calc(100%+8px)] bg-primary': isSwitched,
        }
      )}
      onClick={onSwitch}
    />
  );
};

export default Switch;
