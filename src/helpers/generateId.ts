export default function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}
