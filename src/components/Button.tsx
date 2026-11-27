import type React from "react";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button type={type} disabled={isLoading} {...rest} className="flex items-center justify-center bg-gray-200 rounded-md text-gray-600 p-2.5 mt-10 cursor-pointer hover:bg-gray-300 transition ease-linear disabled:opacity-50 disabled:cursor-progress">
      {children}
    </button>
  );
}
