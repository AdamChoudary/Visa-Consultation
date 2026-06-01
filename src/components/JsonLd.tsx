/**
 * Renders one or more schema.org JSON-LD objects into a <script> tag.
 * Server component — emitted in the initial HTML so crawlers and AI answer
 * engines read it without executing JavaScript.
 */
export default function JsonLd({
  data,
  id,
}: {
  data: object | object[];
  id?: string;
}) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((schema, i) => (
        <script
          key={id ? `${id}-${i}` : i}
          type="application/ld+json"
          // Escape "<" to keep the JSON safe inside HTML.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
