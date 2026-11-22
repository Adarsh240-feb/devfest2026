/** Custom cursor (driven by lib/site.js on fine-pointer devices). */
export default function Cursor() {
  return (
    <div aria-hidden="true" className="cursor" id="cursor">
      <span className="cursor__dot" />
      <span className="cursor__ring" />
    </div>
  );
}
