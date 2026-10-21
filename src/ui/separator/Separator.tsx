import styles from './index.module.scss';

export const Separator = ({ color }: { color?: string }): React.JSX.Element => {
  return (
    <div
      className={styles.separator}
      style={color ? ({ '--separator-color': color } as React.CSSProperties) : {}}
    ></div>
  );
};
