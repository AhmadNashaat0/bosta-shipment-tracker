export function Timeline() {
  return (
    <ol className="relative text-gray-500 border-s border-gray-200 ">
      <TimelineItem title="Personal Info" description="Step details here" />
      <TimelineItem title="Account Info" description="Step details here" />
      <TimelineItem title="Review" description="Step details here" />
      <TimelineItem title="Confirmation" description="Step details here" />
    </ol>
  );
}

function TimelineItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="">
      <span className=" flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -start-4 dark:bg-green-900"></span>
      <h3 className="font-medium leading-tight">{title}</h3>
      <p className="text-sm">{description}</p>
    </li>
  );
}
