import "./index.scss";

interface ButtonProps {
  /**
   * 페이지의 주요 콜 투 액션 버튼 여부
   */
  primary?: boolean;
  /**
   * 배경색
   */
  backgroundColor?: string;
  /**
   * 사이즈
   */
  size?: "small" | "medium" | "large";
  /**
   * 버튼 텍스트
   */
  label: string;
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
}

/**
 * 다용도 버튼
 */
export default function Button({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
