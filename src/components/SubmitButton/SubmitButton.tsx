interface SubmitButtonProps {
  isPending: boolean;
}

export const SubmitButton = ({ isPending }:SubmitButtonProps) => {
  const label = isPending
    ? 'Loading'
    : 'Search';
  return <button type="submit" disabled={isPending}>{label}</button>
}