export default function SectionHeader({
  sectionTitle,
}: {
  sectionTitle: string;
}) {
  return (
    <main>
      <div className="inline-flex items-center justify-start w-full">
        <span className="font-extrabold text-2xl absolute px-3 text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          {sectionTitle}
        </span>
        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </main>
  );
}
