type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type="text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 w-full text-gray-200 focus-within:text-blue-base">
      {legend && (
        <legend className="uppercase text-inherit text-xxs">
          {legend}
        </legend>
      )}

      <input
        type={type}
        className="w-full h-10 border-b border-b-gray-500 text-gray-400 text-base mb-2.5
        bg-transparent outline-none focus:border-b-2 focus:border-blue-base placeholder-gray-400"
        {...rest}
      />
    </fieldset>
  );
}
