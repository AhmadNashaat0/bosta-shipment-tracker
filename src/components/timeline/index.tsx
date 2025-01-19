export function Timeline() {
  return (
    <ol className="relative text-gray-500 border-s border-gray-200 ">
      <TimelineItem title="Personal Info" description="Step details here" />
      <TimelineItem title="Account Info" description="Step details here" />
      <TimelineItem title="Review" description="Step details here" />
      <TimelineItem title="Confirmation" description="Step details here" />
      {/* <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
        <h3 className="font-medium leading-tight">Account Info</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
        <h3 className="font-medium leading-tight">Review</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
        <h3 className="font-medium leading-tight">Confirmation</h3>
        <p className="text-sm">Step details here</p>
      </li> */}
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
