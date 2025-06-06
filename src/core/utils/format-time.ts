export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = Math.floor(remainingSeconds)
    .toString()
    .padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}
