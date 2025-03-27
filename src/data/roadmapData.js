// Initial roadmap data structure
const initialMonths = [
  {
    id: "april-2025",
    name: "April 2025",
    title: "Dasar-dasar Golang",
    progress: 0,
    weeks: [
      {
        id: "week1",
        name: "Minggu 1: Pengenalan & Sintaks Dasar",
        expanded: false,
        days: [
          {
            id: "day1",
            date: "1 April",
            dayName: "Senin",
            tasks: [
              {
                id: "task1-1",
                text: "Menginstal Go (golang.org/dl)",
                completed: false,
              },
              {
                id: "task1-2",
                text: "Mengatur GOPATH dan workspace",
                completed: false,
              },
              {
                id: "task1-3",
                text: 'Membuat dan menjalankan program "Hello World"',
                completed: false,
              },
              {
                id: "task1-4",
                text: "Memahami perintah dasar go run, go build, go install",
                completed: false,
              },
            ],
          },
          {
            id: "day2",
            date: "2 April",
            dayName: "Selasa",
            tasks: [
              {
                id: "task2-1",
                text: "Mempelajari variabel dan tipe data dasar (int, float, string, boolean)",
                completed: false,
              },
              {
                id: "task2-2",
                text: "Mempelajari konstanta dan iota",
                completed: false,
              },
              {
                id: "task2-3",
                text: "Latihan: Membuat program kalkulator sederhana",
                completed: false,
              },
            ],
          },
          {
            id: "day3",
            date: "3 April",
            dayName: "Rabu",
            tasks: [
              {
                id: "task3-1",
                text: "Mempelajari operator dan ekspresi",
                completed: false,
              },
              {
                id: "task3-2",
                text: "Mempelajari struktur kontrol: if, else, switch",
                completed: false,
              },
              {
                id: "task3-3",
                text: "Mempelajari looping dengan for",
                completed: false,
              },
            ],
          },
          {
            id: "day4",
            date: "4 April",
            dayName: "Kamis",
            tasks: [
              {
                id: "task4-1",
                text: "Mempelajari array dan slice",
                completed: false,
              },
              {
                id: "task4-2",
                text: "Mempelajari manipulasi string",
                completed: false,
              },
              {
                id: "task4-3",
                text: "Latihan: Program pengolah data array sederhana",
                completed: false,
              },
            ],
          },
          {
            id: "day5",
            date: "5 April",
            dayName: "Jumat",
            tasks: [
              {
                id: "task5-1",
                text: "Mempelajari map dan struct",
                completed: false,
              },
              { id: "task5-2", text: "Mempelajari pointer", completed: false },
              {
                id: "task5-3",
                text: "Mini-project: Sistem manajemen kontak",
                completed: false,
              },
            ],
          },
          {
            id: "day6",
            date: "6-7 April",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "task6-1",
                text: "Review materi minggu 1",
                completed: false,
              },
              {
                id: "task6-2",
                text: "Menyelesaikan soal latihan di Exercism.io atau LeetCode dengan Golang",
                completed: false,
              },
              {
                id: "task6-3",
                text: 'Membaca "A Tour of Go" bagian dasar',
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "week2",
        name: "Minggu 2: Fungsi, Metode, dan Interface",
        expanded: false,
        days: [
          {
            id: "day7",
            date: "8 April",
            dayName: "Senin",
            tasks: [
              {
                id: "task7-1",
                text: "Mempelajari fungsi dan parameter",
                completed: false,
              },
              {
                id: "task7-2",
                text: "Memahami multiple return values",
                completed: false,
              },
              {
                id: "task7-3",
                text: "Mempelajari variadic functions",
                completed: false,
              },
            ],
          },
          {
            id: "day8",
            date: "9 April",
            dayName: "Selasa",
            tasks: [
              {
                id: "task8-1",
                text: "Mempelajari metode dan receiver",
                completed: false,
              },
              {
                id: "task8-2",
                text: "Memahami pointer vs value receivers",
                completed: false,
              },
              {
                id: "task8-3",
                text: "Latihan: Implementasi metode pada struct",
                completed: false,
              },
            ],
          },
          {
            id: "day9",
            date: "10 April",
            dayName: "Rabu",
            tasks: [
              {
                id: "task9-1",
                text: "Mempelajari interface",
                completed: false,
              },
              {
                id: "task9-2",
                text: "Memahami empty interface dan type assertions",
                completed: false,
              },
              {
                id: "task9-3",
                text: "Mempelajari interface yang umum digunakan (Stringer, Writer, Reader)",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "week3",
        name: "Minggu 3: Concurrency",
        expanded: false,
        days: [],
      },
      {
        id: "week4",
        name: "Minggu 4: Packages, Testing & Tools",
        expanded: false,
        days: [],
      },
    ],
  },
  {
    id: "may-2025",
    name: "Mei 2025",
    title: "Golang untuk Web Development",
    progress: 0,
    weeks: [
      {
        id: "may-week1",
        name: "Minggu 1: Basic Web Programming di Go",
        expanded: false,
        days: [],
      },
    ],
  },
  {
    id: "june-2025",
    name: "Juni 2025",
    title: "Authentication & Security",
    progress: 0,
    weeks: [],
  },
  {
    id: "july-2025",
    name: "Juli 2025",
    title: "Advanced Database & Caching",
    progress: 0,
    weeks: [],
  },
  {
    id: "august-2025",
    name: "Agustus 2025",
    title: "Microservices & gRPC",
    progress: 0,
    weeks: [],
  },
  {
    id: "september-2025",
    name: "September 2025",
    title: "WebSockets & Realtime",
    progress: 0,
    weeks: [],
  },
  {
    id: "october-2025",
    name: "Oktober 2025",
    title: "Cloud Native Development",
    progress: 0,
    weeks: [],
  },
  {
    id: "november-2025",
    name: "November 2025",
    title: "Observability & DevOps",
    progress: 0,
    weeks: [],
  },
  {
    id: "december-2025",
    name: "Desember 2025",
    title: "Advanced Go Patterns",
    progress: 0,
    weeks: [],
  },
  {
    id: "january-2026",
    name: "Januari 2026",
    title: "System Design & Scalability",
    progress: 0,
    weeks: [],
  },
  {
    id: "february-2026",
    name: "Februari 2026",
    title: "Open Source & Personal Branding",
    progress: 0,
    weeks: [],
  },
  {
    id: "march-2026",
    name: "Maret 2026",
    title: "Fullstack Integration",
    progress: 0,
    weeks: [],
  },
  {
    id: "april-2026",
    name: "April 2026",
    title: "Interview Prep & Job Hunting",
    progress: 0,
    weeks: [],
  },
];

export default initialMonths;
