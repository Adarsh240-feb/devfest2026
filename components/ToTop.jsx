export default function ToTop() {
  return (
    <button aria-label="Back to top" className="to-top" id="toTop">
      <svg className="ic">
        <use href="#i-arrow-left" />
      </svg>
    </button>
  );
}
