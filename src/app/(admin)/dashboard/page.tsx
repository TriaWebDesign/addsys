import { getAdmissions } from "@/utils/actions/admission.action";
import { countSubmissions } from "../../../utils/date";

export default async function DashboardPage() {
  const admissions = await getAdmissions();
  const submissionsToday = countSubmissions(admissions, "day");
  const submissionsThisWeek = countSubmissions(admissions, "week");
  const submissionsThisMonth = countSubmissions(admissions, "month");

  const statistics = [
    { title: "Total Admissions", value: admissions.length },
    { title: "Admission Today", value: submissionsToday },
    { title: "Admission This Week", value: submissionsThisWeek },
    { title: "Admission This Month", value: submissionsThisMonth },
  ];

  return (
    <div className="max-h-screen h-screen p-10 overflow-y-auto">
      <h1 className="md:ml-0 ml-4 text-2xl font-semibold mb-4">Dashboard</h1>
      <section className="flex gap-5 flex-wrap">
        {statistics.map((stat, i) => (
          <div
            className="p-4 md:p-10 rounded-lg bg-white drop-shadow-lg"
            key={i}
          >
            <p className="text-sm text-zinc-400 mb-4">{stat.title}</p>
            <h1 className="text-2xl font-bold">{stat.value}</h1>
          </div>
        ))}
      </section>
    </div>
  );
}
