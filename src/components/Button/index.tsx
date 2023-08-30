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
    ? "bg-blue-500 text-white"
    : "text-gray-700 border border-gray-300 shadow-inner";

  const buttonSize = {
    small: "text-xs py-2 px-4",
    medium: "text-sm py-2.5 px-5",
    large: "text-base py-3 px-6",
  };

  return (
    <button
      type="button"
      className={[
        "font-nunito-sans font-semibold rounded-full cursor-pointer inline-block leading-none",
        mode,
        buttonSize[size],
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
