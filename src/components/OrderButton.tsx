export default function OrderButton({ children, type, setOrderBy }) {
  const handleOrderBy = () => setOrderBy(type);

  return <button onClick={() => handleOrderBy()}> {children} </button>;
}
