// Initial roadmap data structure
export const initialMonths = [
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
          {
            id: "day10",
            date: "11 April",
            dayName: "Kamis",
            tasks: [
              {
                id: "task10-1",
                text: "Mempelajari error handling",
                completed: false,
              },
              {
                id: "task10-2",
                text: "Memahami custom errors",
                completed: false,
              },
              {
                id: "task10-3",
                text: "Latihan: Implementasi error handling untuk program sederhana",
                completed: false,
              },
            ],
          },
          {
            id: "day11",
            date: "12 April",
            dayName: "Jumat",
            tasks: [
              {
                id: "task11-1",
                text: "Mempelajari konsep OOP dalam Go",
                completed: false,
              },
              {
                id: "task11-2",
                text: "Mempelajari composition vs inheritance di Go",
                completed: false,
              },
              {
                id: "task11-3",
                text: "Mini-project: Sistem perpustakaan sederhana dengan interface",
                completed: false,
              },
            ],
          },
          {
            id: "day12",
            date: "13-14 April",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "task12-1",
                text: "Review materi minggu 2",
                completed: false,
              },
              {
                id: "task12-2",
                text: "Menyelesaikan tantangan coding di Go (Exercism.io)",
                completed: false,
              },
              {
                id: "task12-3",
                text: 'Membaca bab terkait di "The Go Programming Language" (Donovan & Kernighan)',
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
        days: [
          {
            id: "day13",
            date: "15 April",
            dayName: "Senin",
            tasks: [
              {
                id: "task13-1",
                text: "Mempelajari goroutines",
                completed: false,
              },
              {
                id: "task13-2",
                text: "Memahami konsep concurrency vs parallelism",
                completed: false,
              },
              {
                id: "task13-3",
                text: "Latihan: Membuat program dengan multiple goroutines",
                completed: false,
              },
            ],
          },
          {
            id: "day14",
            date: "16 April",
            dayName: "Selasa",
            tasks: [
              {
                id: "task14-1",
                text: "Mempelajari channels",
                completed: false,
              },
              {
                id: "task14-2",
                text: "Memahami buffered vs unbuffered channels",
                completed: false,
              },
              {
                id: "task14-3",
                text: "Latihan: Komunikasi antar goroutines dengan channels",
                completed: false,
              },
            ],
          },
          {
            id: "day15",
            date: "17 April",
            dayName: "Rabu",
            tasks: [
              {
                id: "task15-1",
                text: "Mempelajari select statement",
                completed: false,
              },
              {
                id: "task15-2",
                text: "Mempelajari pola concurrency umum (fan-in, fan-out, worker pool)",
                completed: false,
              },
              {
                id: "task15-3",
                text: "Latihan: Implementasi worker pool",
                completed: false,
              },
            ],
          },
          {
            id: "day16",
            date: "18 April",
            dayName: "Kamis",
            tasks: [
              {
                id: "task16-1",
                text: "Mempelajari sync package (WaitGroup, Mutex)",
                completed: false,
              },
              {
                id: "task16-2",
                text: "Memahami race conditions dan cara menghindarinya",
                completed: false,
              },
              {
                id: "task16-3",
                text: "Latihan: Deteksi race condition dengan go run -race",
                completed: false,
              },
            ],
          },
          {
            id: "day17",
            date: "19 April",
            dayName: "Jumat",
            tasks: [
              {
                id: "task17-1",
                text: "Mempelajari context package",
                completed: false,
              },
              {
                id: "task17-2",
                text: "Mempelajari best practices untuk concurrency",
                completed: false,
              },
              {
                id: "task17-3",
                text: "Mini-project: Scraper website sederhana dengan concurrency",
                completed: false,
              },
            ],
          },
          {
            id: "day18",
            date: "20-21 April",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "task18-1",
                text: "Review materi minggu 3",
                completed: false,
              },
              {
                id: "task18-2",
                text: 'Baca "Concurrency in Go" oleh Katherine Cox-Buday (bab terpilih)',
                completed: false,
              },
              {
                id: "task18-3",
                text: "Memahami dan menganalisis contoh code concurrency di Go",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "week4",
        name: "Minggu 4: Packages, Testing & Tools",
        expanded: false,
        days: [
          {
            id: "day19",
            date: "22 April",
            dayName: "Senin",
            tasks: [
              {
                id: "task19-1",
                text: "Mempelajari struktur package di Go",
                completed: false,
              },
              {
                id: "task19-2",
                text: "Memahami package visibility (exported vs unexported)",
                completed: false,
              },
              {
                id: "task19-3",
                text: "Latihan: Membuat dan menggunakan custom package",
                completed: false,
              },
            ],
          },
          {
            id: "day20",
            date: "23 April",
            dayName: "Selasa",
            tasks: [
              {
                id: "task20-1",
                text: "Mempelajari Go modules",
                completed: false,
              },
              {
                id: "task20-2",
                text: "Memahami versioning dan dependencies",
                completed: false,
              },
              {
                id: "task20-3",
                text: "Latihan: Setup project dengan go modules",
                completed: false,
              },
            ],
          },
          {
            id: "day21",
            date: "24 April",
            dayName: "Rabu",
            tasks: [
              {
                id: "task21-1",
                text: "Mempelajari unit testing di Go",
                completed: false,
              },
              {
                id: "task21-2",
                text: "Memahami table-driven tests",
                completed: false,
              },
              {
                id: "task21-3",
                text: "Latihan: Menulis test untuk fungsi sederhana",
                completed: false,
              },
            ],
          },
          {
            id: "day22",
            date: "25 April",
            dayName: "Kamis",
            tasks: [
              {
                id: "task22-1",
                text: "Mempelajari benchmarking dan profiling",
                completed: false,
              },
              {
                id: "task22-2",
                text: "Memahami testing.B dan pprof",
                completed: false,
              },
              {
                id: "task22-3",
                text: "Latihan: Benchmark dan optimasi fungsi",
                completed: false,
              },
            ],
          },
          {
            id: "day23",
            date: "26 April",
            dayName: "Jumat",
            tasks: [
              {
                id: "task23-1",
                text: "Mempelajari mocking dan test helpers",
                completed: false,
              },
              {
                id: "task23-2",
                text: "Mempelajari code coverage di Go",
                completed: false,
              },
              {
                id: "task23-3",
                text: "Latihan: Meningkatkan code coverage project",
                completed: false,
              },
            ],
          },
          {
            id: "day24",
            date: "27-28 April",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "task24-1",
                text: "Proyek Akhir Bulan: CLI Todo App",
                completed: false,
              },
              {
                id: "task24-2",
                text: "Implementasi fitur CRUD untuk tasks",
                completed: false,
              },
              {
                id: "task24-3",
                text: "Menyimpan data ke file JSON",
                completed: false,
              },
              {
                id: "task24-4",
                text: "Menulis unit tests komprehensif",
                completed: false,
              },
              {
                id: "task24-5",
                text: "Menggunakan goroutines untuk operasi file",
                completed: false,
              },
            ],
          },
        ],
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
        days: [
          {
            id: "may-day1",
            date: "29 April",
            dayName: "Senin",
            tasks: [
              {
                id: "may-task1-1",
                text: "Mempelajari package net/http",
                completed: false,
              },
              {
                id: "may-task1-2",
                text: "Memahami handlers dan ServeMux",
                completed: false,
              },
              {
                id: "may-task1-3",
                text: "Latihan: Server web sederhana",
                completed: false,
              },
            ],
          },
          {
            id: "may-day2",
            date: "30 April",
            dayName: "Selasa",
            tasks: [
              {
                id: "may-task2-1",
                text: "Mempelajari HTTP methods dan routing",
                completed: false,
              },
              {
                id: "may-task2-2",
                text: "Mempelajari request dan response handling",
                completed: false,
              },
              {
                id: "may-task2-3",
                text: "Latihan: API endpoint sederhana",
                completed: false,
              },
            ],
          },
          {
            id: "may-day3",
            date: "1 Mei",
            dayName: "Rabu",
            tasks: [
              {
                id: "may-task3-1",
                text: "Mempelajari templating di Go (html/template)",
                completed: false,
              },
              {
                id: "may-task3-2",
                text: "Memahami parsing dan rendering template",
                completed: false,
              },
              {
                id: "may-task3-3",
                text: "Latihan: Membuat halaman web dinamis dengan template",
                completed: false,
              },
            ],
          },
          {
            id: "may-day4",
            date: "2 Mei",
            dayName: "Kamis",
            tasks: [
              {
                id: "may-task4-1",
                text: "Mempelajari middleware di Go",
                completed: false,
              },
              {
                id: "may-task4-2",
                text: "Memahami konsep middleware chaining",
                completed: false,
              },
              {
                id: "may-task4-3",
                text: "Latihan: Implementasi logger middleware",
                completed: false,
              },
            ],
          },
          {
            id: "may-day5",
            date: "3 Mei",
            dayName: "Jumat",
            tasks: [
              {
                id: "may-task5-1",
                text: "Mempelajari handling static files",
                completed: false,
              },
              {
                id: "may-task5-2",
                text: "Mempelajari form processing dan validation",
                completed: false,
              },
              {
                id: "may-task5-3",
                text: "Mini-project: Form registration dengan validasi",
                completed: false,
              },
            ],
          },
          {
            id: "may-day6",
            date: "4-5 Mei",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "may-task6-1",
                text: "Review materi minggu 1",
                completed: false,
              },
              {
                id: "may-task6-2",
                text: "Mendalami dokumentasi net/http",
                completed: false,
              },
              {
                id: "may-task6-3",
                text: "Eksperimen dengan berbagai fitur web di Go",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "may-week2",
        name: "Minggu 2: Router dan HTTP Framework",
        expanded: false,
        days: [
          {
            id: "may-day7",
            date: "6 Mei",
            dayName: "Senin",
            tasks: [
              {
                id: "may-task7-1",
                text: "Mempelajari Gorilla Mux",
                completed: false,
              },
              {
                id: "may-task7-2",
                text: "Memahami URL patterns dan parameter",
                completed: false,
              },
              {
                id: "may-task7-3",
                text: "Latihan: Setup routing dengan Gorilla Mux",
                completed: false,
              },
            ],
          },
          {
            id: "may-day8",
            date: "7 Mei",
            dayName: "Selasa",
            tasks: [
              {
                id: "may-task8-1",
                text: "Mempelajari handling path variables dan query params",
                completed: false,
              },
              {
                id: "may-task8-2",
                text: "Memahami route matchers dan subrouters",
                completed: false,
              },
              {
                id: "may-task8-3",
                text: "Latihan: API dengan parameter dinamis",
                completed: false,
              },
            ],
          },
          {
            id: "may-day9",
            date: "8 Mei",
            dayName: "Rabu",
            tasks: [
              {
                id: "may-task9-1",
                text: "Mempelajari middleware di Gorilla",
                completed: false,
              },
              {
                id: "may-task9-2",
                text: "Memahami middleware untuk authentication",
                completed: false,
              },
              {
                id: "may-task9-3",
                text: "Latihan: Implementasi rate limiter middleware",
                completed: false,
              },
            ],
          },
          {
            id: "may-day10",
            date: "9 Mei",
            dayName: "Kamis",
            tasks: [
              {
                id: "may-task10-1",
                text: "Memahami framework alternatif (Gin, Echo, Chi)",
                completed: false,
              },
              {
                id: "may-task10-2",
                text: "Membandingkan performansi dan fitur",
                completed: false,
              },
              {
                id: "may-task10-3",
                text: "Latihan: Porting API ke Gin/Echo",
                completed: false,
              },
            ],
          },
          {
            id: "may-day11",
            date: "10 Mei",
            dayName: "Jumat",
            tasks: [
              {
                id: "may-task11-1",
                text: "Mempelajari REST API best practices",
                completed: false,
              },
              {
                id: "may-task11-2",
                text: "Memahami status codes dan response formatting",
                completed: false,
              },
              {
                id: "may-task11-3",
                text: "Mini-project: RESTful CRUD API",
                completed: false,
              },
            ],
          },
          {
            id: "may-day12",
            date: "11-12 Mei",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "may-task12-1",
                text: "Review materi minggu 2",
                completed: false,
              },
              {
                id: "may-task12-2",
                text: "Membandingkan implementasi di berbagai framework",
                completed: false,
              },
              {
                id: "may-task12-3",
                text: "Riset arsitektur web apps di Go",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "may-week3",
        name: "Minggu 3: Database Access dengan Go",
        expanded: false,
        days: [
          {
            id: "may-day13",
            date: "13 Mei",
            dayName: "Senin",
            tasks: [
              {
                id: "may-task13-1",
                text: "Mempelajari package database/sql",
                completed: false,
              },
              {
                id: "may-task13-2",
                text: "Memahami database drivers",
                completed: false,
              },
              {
                id: "may-task13-3",
                text: "Latihan: Koneksi ke database dengan Go",
                completed: false,
              },
            ],
          },
          {
            id: "may-day14",
            date: "14 Mei",
            dayName: "Selasa",
            tasks: [
              {
                id: "may-task14-1",
                text: "Mempelajari operasi query dan exec",
                completed: false,
              },
              {
                id: "may-task14-2",
                text: "Memahami prepared statements",
                completed: false,
              },
              {
                id: "may-task14-3",
                text: "Latihan: CRUD operations dengan database/sql",
                completed: false,
              },
            ],
          },
          {
            id: "may-day15",
            date: "15 Mei",
            dayName: "Rabu",
            tasks: [
              {
                id: "may-task15-1",
                text: "Mempelajari GORM (Go ORM)",
                completed: false,
              },
              {
                id: "may-task15-2",
                text: "Memahami models dan migrations",
                completed: false,
              },
              {
                id: "may-task15-3",
                text: "Latihan: Setup GORM dengan PostgreSQL",
                completed: false,
              },
            ],
          },
          {
            id: "may-day16",
            date: "16 Mei",
            dayName: "Kamis",
            tasks: [
              {
                id: "may-task16-1",
                text: "Mempelajari GORM relationships",
                completed: false,
              },
              {
                id: "may-task16-2",
                text: "Memahami queries dan preloading",
                completed: false,
              },
              {
                id: "may-task16-3",
                text: "Latihan: Implementasi relasi one-to-many",
                completed: false,
              },
            ],
          },
          {
            id: "may-day17",
            date: "17 Mei",
            dayName: "Jumat",
            tasks: [
              {
                id: "may-task17-1",
                text: "Mempelajari transaction handling",
                completed: false,
              },
              {
                id: "may-task17-2",
                text: "Memahami connection pooling",
                completed: false,
              },
              {
                id: "may-task17-3",
                text: "Mini-project: API dengan database integration",
                completed: false,
              },
            ],
          },
          {
            id: "may-day18",
            date: "18-19 Mei",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "may-task18-1",
                text: "Review materi minggu 3",
                completed: false,
              },
              {
                id: "may-task18-2",
                text: "Membandingkan raw SQL vs ORM",
                completed: false,
              },
              {
                id: "may-task18-3",
                text: "Mengoptimasi query database",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "may-week4",
        name: "Minggu 4: API Design dan Testing",
        expanded: false,
        days: [
          {
            id: "may-day19",
            date: "20 Mei",
            dayName: "Senin",
            tasks: [
              {
                id: "may-task19-1",
                text: "Mempelajari API versioning",
                completed: false,
              },
              {
                id: "may-task19-2",
                text: "Memahami content negotiation",
                completed: false,
              },
              {
                id: "may-task19-3",
                text: "Latihan: API dengan multiple versions",
                completed: false,
              },
            ],
          },
          {
            id: "may-day20",
            date: "21 Mei",
            dayName: "Selasa",
            tasks: [
              {
                id: "may-task20-1",
                text: "Mempelajari API documentation (Swagger/OpenAPI)",
                completed: false,
              },
              {
                id: "may-task20-2",
                text: "Memahami Go Swagger",
                completed: false,
              },
              {
                id: "may-task20-3",
                text: "Latihan: Dokumentasi API dengan Swagger",
                completed: false,
              },
            ],
          },
          {
            id: "may-day21",
            date: "22 Mei",
            dayName: "Rabu",
            tasks: [
              {
                id: "may-task21-1",
                text: "Mempelajari API testing",
                completed: false,
              },
              {
                id: "may-task21-2",
                text: "Memahami HTTP testing di Go",
                completed: false,
              },
              {
                id: "may-task21-3",
                text: "Latihan: Unit tests untuk API endpoints",
                completed: false,
              },
            ],
          },
          {
            id: "may-day22",
            date: "23 Mei",
            dayName: "Kamis",
            tasks: [
              {
                id: "may-task22-1",
                text: "Mempelajari mock database untuk testing",
                completed: false,
              },
              {
                id: "may-task22-2",
                text: "Memahami test fixtures dan helpers",
                completed: false,
              },
              {
                id: "may-task22-3",
                text: "Latihan: Testing database interactions",
                completed: false,
              },
            ],
          },
          {
            id: "may-day23",
            date: "24 Mei",
            dayName: "Jumat",
            tasks: [
              {
                id: "may-task23-1",
                text: "Mempelajari integration testing",
                completed: false,
              },
              {
                id: "may-task23-2",
                text: "Memahami test containers",
                completed: false,
              },
              {
                id: "may-task23-3",
                text: "Latihan: Setup integration tests dengan Docker",
                completed: false,
              },
            ],
          },
          {
            id: "may-day24",
            date: "25-26 Mei",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "may-task24-1",
                text: "Proyek Akhir Bulan: Task Management API",
                completed: false,
              },
              {
                id: "may-task24-2",
                text: "Implementasi CRUD untuk tasks dan categories",
                completed: false,
              },
              {
                id: "may-task24-3",
                text: "Autentikasi API key",
                completed: false,
              },
              {
                id: "may-task24-4",
                text: "Database PostgreSQL dengan GORM",
                completed: false,
              },
              {
                id: "may-task24-5",
                text: "Testing dan dokumentasi lengkap",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "june-2025",
    name: "Juni 2025",
    title: "Authentication & Security",
    progress: 0,
    weeks: [
      {
        id: "june-week1",
        name: "Minggu 1: Basic Auth & Sessions",
        expanded: false,
        days: [
          {
            id: "june-day1",
            date: "27 Mei",
            dayName: "Senin",
            tasks: [
              {
                id: "june-task1-1",
                text: "Mempelajari HTTP authentication",
                completed: false,
              },
              {
                id: "june-task1-2",
                text: "Memahami basic auth dan digest auth",
                completed: false,
              },
              {
                id: "june-task1-3",
                text: "Latihan: Implementasi basic auth",
                completed: false,
              },
            ],
          },
          {
            id: "june-day2",
            date: "28 Mei",
            dayName: "Selasa",
            tasks: [
              {
                id: "june-task2-1",
                text: "Mempelajari session management",
                completed: false,
              },
              {
                id: "june-task2-2",
                text: "Memahami cookies dan web storage",
                completed: false,
              },
              {
                id: "june-task2-3",
                text: "Latihan: Implementasi session dengan cookies",
                completed: false,
              },
            ],
          },
          {
            id: "june-day3",
            date: "29 Mei",
            dayName: "Rabu",
            tasks: [
              {
                id: "june-task3-1",
                text: "Mempelajari Gorilla sessions",
                completed: false,
              },
              {
                id: "june-task3-2",
                text: "Memahami session stores (memory, file, redis)",
                completed: false,
              },
              {
                id: "june-task3-3",
                text: "Latihan: Session management dengan Gorilla",
                completed: false,
              },
            ],
          },
          {
            id: "june-day4",
            date: "30 Mei",
            dayName: "Kamis",
            tasks: [
              {
                id: "june-task4-1",
                text: "Mempelajari CSRF protection",
                completed: false,
              },
              {
                id: "june-task4-2",
                text: "Memahami SameSite cookies",
                completed: false,
              },
              {
                id: "june-task4-3",
                text: "Latihan: Implementasi CSRF protection",
                completed: false,
              },
            ],
          },
          {
            id: "june-day5",
            date: "31 Mei",
            dayName: "Jumat",
            tasks: [
              {
                id: "june-task5-1",
                text: "Mempelajari secure cookies",
                completed: false,
              },
              {
                id: "june-task5-2",
                text: "Memahami session expiration dan renewal",
                completed: false,
              },
              {
                id: "june-task5-3",
                text: "Mini-project: Login system dengan sessions",
                completed: false,
              },
            ],
          },
          {
            id: "june-day6",
            date: "1-2 Juni",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "june-task6-1",
                text: "Review materi minggu 1",
                completed: false,
              },
              {
                id: "june-task6-2",
                text: "Riset best practices untuk session management",
                completed: false,
              },
              {
                id: "june-task6-3",
                text: "Analisis keamanan session",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "june-week2",
        name: "Minggu 2: JWT Authentication",
        expanded: false,
        days: [
          {
            id: "june-day7",
            date: "3 Juni",
            dayName: "Senin",
            tasks: [
              {
                id: "june-task7-1",
                text: "Mempelajari konsep JWT",
                completed: false,
              },
              {
                id: "june-task7-2",
                text: "Memahami struktur token (header, payload, signature)",
                completed: false,
              },
              {
                id: "june-task7-3",
                text: "Latihan: Decode dan validasi JWT",
                completed: false,
              },
            ],
          },
          {
            id: "june-day8",
            date: "4 Juni",
            dayName: "Selasa",
            tasks: [
              {
                id: "june-task8-1",
                text: "Mempelajari jwt-go package",
                completed: false,
              },
              {
                id: "june-task8-2",
                text: "Memahami signing methods",
                completed: false,
              },
              {
                id: "june-task8-3",
                text: "Latihan: Generate dan verifikasi JWT",
                completed: false,
              },
            ],
          },
          {
            id: "june-day9",
            date: "5 Juni",
            dayName: "Rabu",
            tasks: [
              {
                id: "june-task9-1",
                text: "Mempelajari JWT auth flow di API",
                completed: false,
              },
              {
                id: "june-task9-2",
                text: "Memahami refresh tokens",
                completed: false,
              },
              {
                id: "june-task9-3",
                text: "Latihan: Implementasi login/refresh endpoint",
                completed: false,
              },
            ],
          },
          {
            id: "june-day10",
            date: "6 Juni",
            dayName: "Kamis",
            tasks: [
              {
                id: "june-task10-1",
                text: "Mempelajari middleware JWT validation",
                completed: false,
              },
              {
                id: "june-task10-2",
                text: "Memahami claims extraction",
                completed: false,
              },
              {
                id: "june-task10-3",
                text: "Latihan: Middleware untuk protected routes",
                completed: false,
              },
            ],
          },
          {
            id: "june-day11",
            date: "7 Juni",
            dayName: "Jumat",
            tasks: [
              {
                id: "june-task11-1",
                text: "Mempelajari JWT security best practices",
                completed: false,
              },
              {
                id: "june-task11-2",
                text: "Memahami common vulnerabilities",
                completed: false,
              },
              {
                id: "june-task11-3",
                text: "Mini-project: Complete JWT auth system",
                completed: false,
              },
            ],
          },
          {
            id: "june-day12",
            date: "8-9 Juni",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "june-task12-1",
                text: "Review materi minggu 2",
                completed: false,
              },
              {
                id: "june-task12-2",
                text: "Riset JWT vs session-based auth",
                completed: false,
              },
              {
                id: "june-task12-3",
                text: "Eksperimen dengan berbagai JWT libraries",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "june-week3",
        name: "Minggu 3: OAuth & Social Login",
        expanded: false,
        days: [
          {
            id: "june-day13",
            date: "10 Juni",
            dayName: "Senin",
            tasks: [
              {
                id: "june-task13-1",
                text: "Mempelajari konsep OAuth 2.0",
                completed: false,
              },
              {
                id: "june-task13-2",
                text: "Memahami grant types",
                completed: false,
              },
              {
                id: "june-task13-3",
                text: "Latihan: Setup OAuth client",
                completed: false,
              },
            ],
          },
          {
            id: "june-day14",
            date: "11 Juni",
            dayName: "Selasa",
            tasks: [
              {
                id: "june-task14-1",
                text: "Mempelajari OAuth dengan Go",
                completed: false,
              },
              {
                id: "june-task14-2",
                text: "Memahami oauth2 package",
                completed: false,
              },
              {
                id: "june-task14-3",
                text: "Latihan: Implementasi OAuth client",
                completed: false,
              },
            ],
          },
          {
            id: "june-day15",
            date: "12 Juni",
            dayName: "Rabu",
            tasks: [
              {
                id: "june-task15-1",
                text: "Mempelajari integrasi Google OAuth",
                completed: false,
              },
              {
                id: "june-task15-2",
                text: "Memahami user info API",
                completed: false,
              },
              {
                id: "june-task15-3",
                text: "Latihan: Login dengan Google",
                completed: false,
              },
            ],
          },
          {
            id: "june-day16",
            date: "13 Juni",
            dayName: "Kamis",
            tasks: [
              {
                id: "june-task16-1",
                text: "Mempelajari integrasi GitHub OAuth",
                completed: false,
              },
              {
                id: "june-task16-2",
                text: "Memahami scopes dan permissions",
                completed: false,
              },
              {
                id: "june-task16-3",
                text: "Latihan: Login dengan GitHub",
                completed: false,
              },
            ],
          },
          {
            id: "june-day17",
            date: "14 Juni",
            dayName: "Jumat",
            tasks: [
              {
                id: "june-task17-1",
                text: "Mempelajari state management dan CSRF protection",
                completed: false,
              },
              {
                id: "june-task17-2",
                text: "Memahami multi-provider support",
                completed: false,
              },
              {
                id: "june-task17-3",
                text: "Mini-project: Multi-provider social login",
                completed: false,
              },
            ],
          },
          {
            id: "june-day18",
            date: "15-16 Juni",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "june-task18-1",
                text: "Review materi minggu 3",
                completed: false,
              },
              {
                id: "june-task18-2",
                text: "Riset OpenID Connect",
                completed: false,
              },
              {
                id: "june-task18-3",
                text: "Eksperimen dengan berbagai OAuth providers",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "june-week4",
        name: "Minggu 4: Security Best Practices",
        expanded: false,
        days: [
          {
            id: "june-day19",
            date: "17 Juni",
            dayName: "Senin",
            tasks: [
              {
                id: "june-task19-1",
                text: "Mempelajari password hashing",
                completed: false,
              },
              {
                id: "june-task19-2",
                text: "Memahami bcrypt dan argon2",
                completed: false,
              },
              {
                id: "june-task19-3",
                text: "Latihan: Implementasi secure password storage",
                completed: false,
              },
            ],
          },
          {
            id: "june-day20",
            date: "18 Juni",
            dayName: "Selasa",
            tasks: [
              {
                id: "june-task20-1",
                text: "Mempelajari rate limiting",
                completed: false,
              },
              {
                id: "june-task20-2",
                text: "Memahami IP-based dan token-based limiting",
                completed: false,
              },
              {
                id: "june-task20-3",
                text: "Latihan: Implementasi rate limiter",
                completed: false,
              },
            ],
          },
          {
            id: "june-day21",
            date: "19 Juni",
            dayName: "Rabu",
            tasks: [
              {
                id: "june-task21-1",
                text: "Mempelajari CORS",
                completed: false,
              },
              {
                id: "june-task21-2",
                text: "Memahami CORS headers dan preflight",
                completed: false,
              },
              {
                id: "june-task21-3",
                text: "Latihan: Setup CORS middleware",
                completed: false,
              },
            ],
          },
          {
            id: "june-day22",
            date: "20 Juni",
            dayName: "Kamis",
            tasks: [
              {
                id: "june-task22-1",
                text: "Mempelajari secure headers",
                completed: false,
              },
              {
                id: "june-task22-2",
                text: "Memahami CSP, HSTS, X-Frame-Options",
                completed: false,
              },
              {
                id: "june-task22-3",
                text: "Latihan: Implementasi secure headers middleware",
                completed: false,
              },
            ],
          },
          {
            id: "june-day23",
            date: "21 Juni",
            dayName: "Jumat",
            tasks: [
              {
                id: "june-task23-1",
                text: "Mempelajari input validation dan sanitization",
                completed: false,
              },
              {
                id: "june-task23-2",
                text: "Memahami SQL injection prevention",
                completed: false,
              },
              {
                id: "june-task23-3",
                text: "Latihan: Validasi data dengan validator package",
                completed: false,
              },
            ],
          },
          {
            id: "june-day24",
            date: "22-23 Juni",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "june-task24-1",
                text: "Proyek Akhir Bulan: Secure Authentication Service",
                completed: false,
              },
              {
                id: "june-task24-2",
                text: "JWT dan session-based auth",
                completed: false,
              },
              {
                id: "june-task24-3",
                text: "Social login (Google, GitHub)",
                completed: false,
              },
              {
                id: "june-task24-4",
                text: "Rate limiting dan security headers",
                completed: false,
              },
              {
                id: "june-task24-5",
                text: "Password reset dan email verification",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "july-2025",
    name: "Juli 2025",
    title: "Advanced Database & Caching",
    progress: 0,
    weeks: [
      {
        id: "july-week1",
        name: "Minggu 1: Advanced Database Operations",
        expanded: false,
        days: [
          {
            id: "july-day1",
            date: "24 Juni",
            dayName: "Senin",
            tasks: [
              {
                id: "july-task1-1",
                text: "Mempelajari advanced SQL",
                completed: false,
              },
              {
                id: "july-task1-2",
                text: "Memahami indexes dan query planning",
                completed: false,
              },
              {
                id: "july-task1-3",
                text: "Latihan: Optimasi query dengan explain analyze",
                completed: false,
              },
            ],
          },
          {
            id: "july-day2",
            date: "25 Juni",
            dayName: "Selasa",
            tasks: [
              {
                id: "july-task2-1",
                text: "Mempelajari database migrations",
                completed: false,
              },
              {
                id: "july-task2-2",
                text: "Memahami schema versioning",
                completed: false,
              },
              {
                id: "july-task2-3",
                text: "Latihan: Setup migrations dengan golang-migrate",
                completed: false,
              },
            ],
          },
          {
            id: "july-day3",
            date: "26 Juni",
            dayName: "Rabu",
            tasks: [
              {
                id: "july-task3-1",
                text: "Mempelajari advanced GORM",
                completed: false,
              },
              {
                id: "july-task3-2",
                text: "Memahami hooks dan callbacks",
                completed: false,
              },
              {
                id: "july-task3-3",
                text: "Latihan: Implementasi soft delete dan audit log",
                completed: false,
              },
            ],
          },
          {
            id: "july-day4",
            date: "27 Juni",
            dayName: "Kamis",
            tasks: [
              {
                id: "july-task4-1",
                text: "Mempelajari database transaction patterns",
                completed: false,
              },
              {
                id: "july-task4-2",
                text: "Memahami isolation levels",
                completed: false,
              },
              {
                id: "july-task4-3",
                text: "Latihan: Implementasi distributed transactions",
                completed: false,
              },
            ],
          },
          {
            id: "july-day5",
            date: "28 Juni",
            dayName: "Jumat",
            tasks: [
              {
                id: "july-task5-1",
                text: "Mempelajari database sharding",
                completed: false,
              },
              {
                id: "july-task5-2",
                text: "Memahami read replicas",
                completed: false,
              },
              {
                id: "july-task5-3",
                text: "Mini-project: Setup primary-replica PostgreSQL",
                completed: false,
              },
            ],
          },
          {
            id: "july-day6",
            date: "29-30 Juni",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "july-task6-1",
                text: "Review materi minggu 1",
                completed: false,
              },
              {
                id: "july-task6-2",
                text: "Riset database scaling patterns",
                completed: false,
              },
              {
                id: "july-task6-3",
                text: "Eksperimen dengan database benchmarking",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "july-week2",
        name: "Minggu 2: Redis & Caching",
        expanded: false,
        days: [
          {
            id: "july-day7",
            date: "1 Juli",
            dayName: "Senin",
            tasks: [
              {
                id: "july-task7-1",
                text: "Mempelajari konsep caching",
                completed: false,
              },
              {
                id: "july-task7-2",
                text: "Memahami cache strategies (LRU, TTL)",
                completed: false,
              },
              {
                id: "july-task7-3",
                text: "Latihan: Implementasi in-memory cache",
                completed: false,
              },
            ],
          },
          {
            id: "july-day8",
            date: "2 Juli",
            dayName: "Selasa",
            tasks: [
              {
                id: "july-task8-1",
                text: "Mempelajari Redis dasar",
                completed: false,
              },
              {
                id: "july-task8-2",
                text: "Memahami data structures di Redis",
                completed: false,
              },
              {
                id: "july-task8-3",
                text: "Latihan: Setup Redis dengan Go",
                completed: false,
              },
            ],
          },
          {
            id: "july-day9",
            date: "3 Juli",
            dayName: "Rabu",
            tasks: [
              {
                id: "july-task9-1",
                text: "Mempelajari caching di API",
                completed: false,
              },
              {
                id: "july-task9-2",
                text: "Memahami cache invalidation",
                completed: false,
              },
              {
                id: "july-task9-3",
                text: "Latihan: Caching database queries",
                completed: false,
              },
            ],
          },
          {
            id: "july-day10",
            date: "4 Juli",
            dayName: "Kamis",
            tasks: [
              {
                id: "july-task10-1",
                text: "Mempelajari Redis pub/sub",
                completed: false,
              },
              {
                id: "july-task10-2",
                text: "Memahami distributed events",
                completed: false,
              },
              {
                id: "july-task10-3",
                text: "Latihan: Implementasi pub/sub system",
                completed: false,
              },
            ],
          },
          {
            id: "july-day11",
            date: "5 Juli",
            dayName: "Jumat",
            tasks: [
              {
                id: "july-task11-1",
                text: "Mempelajari Redis rate limiting",
                completed: false,
              },
              {
                id: "july-task11-2",
                text: "Memahami distributed locking",
                completed: false,
              },
              {
                id: "july-task11-3",
                text: "Mini-project: Distributed task scheduling",
                completed: false,
              },
            ],
          },
          {
            id: "july-day12",
            date: "6-7 Juli",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "july-task12-1",
                text: "Review materi minggu 2",
                completed: false,
              },
              {
                id: "july-task12-2",
                text: "Riset Redis vs other caching solutions",
                completed: false,
              },
              {
                id: "july-task12-3",
                text: "Eksperimen dengan Redis clustering",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "july-week3",
        name: "Minggu 3: Message Queues & Background Jobs",
        expanded: false,
        days: [
          {
            id: "july-day13",
            date: "8 Juli",
            dayName: "Senin",
            tasks: [
              {
                id: "july-task13-1",
                text: "Mempelajari konsep message queues",
                completed: false,
              },
              {
                id: "july-task13-2",
                text: "Memahami producer-consumer pattern",
                completed: false,
              },
              {
                id: "july-task13-3",
                text: "Latihan: Implementasi simple queue dengan Redis",
                completed: false,
              },
            ],
          },
          {
            id: "july-day14",
            date: "9 Juli",
            dayName: "Selasa",
            tasks: [
              {
                id: "july-task14-1",
                text: "Mempelajari background job processing",
                completed: false,
              },
              {
                id: "july-task14-2",
                text: "Memahami worker pools",
                completed: false,
              },
              {
                id: "july-task14-3",
                text: "Latihan: Setup worker untuk async tasks",
                completed: false,
              },
            ],
          },
          {
            id: "july-day15",
            date: "10 Juli",
            dayName: "Rabu",
            tasks: [
              {
                id: "july-task15-1",
                text: "Mempelajari RabbitMQ dasar",
                completed: false,
              },
              {
                id: "july-task15-2",
                text: "Memahami exchanges dan routing",
                completed: false,
              },
              {
                id: "july-task15-3",
                text: "Latihan: Setup RabbitMQ dengan Go",
                completed: false,
              },
            ],
          },
          {
            id: "july-day16",
            date: "11 Juli",
            dayName: "Kamis",
            tasks: [
              {
                id: "july-task16-1",
                text: "Mempelajari retry strategies",
                completed: false,
              },
              {
                id: "july-task16-2",
                text: "Memahami dead letter queues",
                completed: false,
              },
              {
                id: "july-task16-3",
                text: "Latihan: Implementasi robust job queue",
                completed: false,
              },
            ],
          },
          {
            id: "july-day17",
            date: "12 Juli",
            dayName: "Jumat",
            tasks: [
              {
                id: "july-task17-1",
                text: "Mempelajari scheduled jobs",
                completed: false,
              },
              {
                id: "july-task17-2",
                text: "Memahami distributed cron",
                completed: false,
              },
              {
                id: "july-task17-3",
                text: "Mini-project: Email notification system",
                completed: false,
              },
            ],
          },
          {
            id: "july-day18",
            date: "13-14 Juli",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "july-task18-1",
                text: "Review materi minggu 3",
                completed: false,
              },
              {
                id: "july-task18-2",
                text: "Riset message queue patterns",
                completed: false,
              },
              {
                id: "july-task18-3",
                text: "Eksperimen dengan various queue systems",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "july-week4",
        name: "Minggu 4: Data Integrity & NoSQL",
        expanded: false,
        days: [
          {
            id: "july-day19",
            date: "15 Juli",
            dayName: "Senin",
            tasks: [
              {
                id: "july-task19-1",
                text: "Mempelajari MongoDB dasar",
                completed: false,
              },
              {
                id: "july-task19-2",
                text: "Memahami dokumen dan collections",
                completed: false,
              },
              {
                id: "july-task19-3",
                text: "Latihan: Setup MongoDB dengan Go",
                completed: false,
              },
            ],
          },
          {
            id: "july-day20",
            date: "16 Juli",
            dayName: "Selasa",
            tasks: [
              {
                id: "july-task20-1",
                text: "Mempelajari CRUD operations di MongoDB",
                completed: false,
              },
              {
                id: "july-task20-2",
                text: "Memahami document embedding vs referencing",
                completed: false,
              },
              {
                id: "july-task20-3",
                text: "Latihan: Implementasi model dengan MongoDB",
                completed: false,
              },
            ],
          },
          {
            id: "july-day21",
            date: "17 Juli",
            dayName: "Rabu",
            tasks: [
              {
                id: "july-task21-1",
                text: "Mempelajari data consistency patterns",
                completed: false,
              },
              {
                id: "july-task21-2",
                text: "Memahami eventual consistency",
                completed: false,
              },
              {
                id: "july-task21-3",
                text: "Latihan: Implementasi distributed cache consistency",
                completed: false,
              },
            ],
          },
          {
            id: "july-day22",
            date: "18 Juli",
            dayName: "Kamis",
            tasks: [
              {
                id: "july-task22-1",
                text: "Mempelajari backup dan recovery",
                completed: false,
              },
              {
                id: "july-task22-2",
                text: "Memahami point-in-time recovery",
                completed: false,
              },
              {
                id: "july-task22-3",
                text: "Latihan: Setup backup automation",
                completed: false,
              },
            ],
          },
          {
            id: "july-day23",
            date: "19 Juli",
            dayName: "Jumat",
            tasks: [
              {
                id: "july-task23-1",
                text: "Mempelajari database benchmarking",
                completed: false,
              },
              {
                id: "july-task23-2",
                text: "Memahami performance monitoring",
                completed: false,
              },
              {
                id: "july-task23-3",
                text: "Mini-project: Database performance testing",
                completed: false,
              },
            ],
          },
          {
            id: "july-day24",
            date: "20-21 Juli",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "july-task24-1",
                text: "Proyek Akhir Bulan: Scalable E-commerce API",
                completed: false,
              },
              {
                id: "july-task24-2",
                text: "Caching layer dengan Redis",
                completed: false,
              },
              {
                id: "july-task24-3",
                text: "Background job processing",
                completed: false,
              },
              {
                id: "july-task24-4",
                text: "Optimized database queries",
                completed: false,
              },
              {
                id: "july-task24-5",
                text: "High-throughput product catalog",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "august-2025",
    name: "Agustus 2025",
    title: "Microservices & gRPC",
    progress: 0,
    weeks: [
      {
        id: "august-week1",
        name: "Minggu 1: Microservice Fundamentals",
        expanded: false,
        days: [
          {
            id: "august-day1",
            date: "22 Juli",
            dayName: "Senin",
            tasks: [
              {
                id: "august-task1-1",
                text: "Mempelajari konsep microservices",
                completed: false,
              },
              {
                id: "august-task1-2",
                text: "Memahami monolith vs microservices",
                completed: false,
              },
              {
                id: "august-task1-3",
                text: "Latihan: Dekomposisi monolith ke microservices",
                completed: false,
              },
            ],
          },
          {
            id: "august-day2",
            date: "23 Juli",
            dayName: "Selasa",
            tasks: [
              {
                id: "august-task2-1",
                text: "Mempelajari service boundaries",
                completed: false,
              },
              {
                id: "august-task2-2",
                text: "Memahami domain-driven design",
                completed: false,
              },
              {
                id: "august-task2-3",
                text: "Latihan: Identifikasi bounded contexts",
                completed: false,
              },
            ],
          },
          {
            id: "august-day3",
            date: "24 Juli",
            dayName: "Rabu",
            tasks: [
              {
                id: "august-task3-1",
                text: "Mempelajari service discovery",
                completed: false,
              },
              {
                id: "august-task3-2",
                text: "Memahami client-side vs server-side discovery",
                completed: false,
              },
              {
                id: "august-task3-3",
                text: "Latihan: Setup Consul dengan Go",
                completed: false,
              },
            ],
          },
          {
            id: "august-day4",
            date: "25 Juli",
            dayName: "Kamis",
            tasks: [
              {
                id: "august-task4-1",
                text: "Mempelajari API gateway pattern",
                completed: false,
              },
              {
                id: "august-task4-2",
                text: "Memahami routing dan aggregation",
                completed: false,
              },
              {
                id: "august-task4-3",
                text: "Latihan: Implementasi simple gateway",
                completed: false,
              },
            ],
          },
          {
            id: "august-day5",
            date: "26 Juli",
            dayName: "Jumat",
            tasks: [
              {
                id: "august-task5-1",
                text: "Mempelajari circuit breaker pattern",
                completed: false,
              },
              {
                id: "august-task5-2",
                text: "Memahami bulkhead pattern",
                completed: false,
              },
              {
                id: "august-task5-3",
                text: "Mini-project: Resilient service communication",
                completed: false,
              },
            ],
          },
          {
            id: "august-day6",
            date: "27-28 Juli",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "august-task6-1",
                text: "Review materi minggu 1",
                completed: false,
              },
              {
                id: "august-task6-2",
                text: "Riset microservice patterns",
                completed: false,
              },
              {
                id: "august-task6-3",
                text: "Eksperimen dengan service mesh",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "august-week2",
        name: "Minggu 2: gRPC Fundamentals",
        expanded: false,
        days: [
          {
            id: "august-day7",
            date: "29 Juli",
            dayName: "Senin",
            tasks: [
              {
                id: "august-task7-1",
                text: "Mempelajari konsep gRPC",
                completed: false,
              },
              {
                id: "august-task7-2",
                text: "Memahami Protocol Buffers",
                completed: false,
              },
              {
                id: "august-task7-3",
                text: "Latihan: Setup gRPC di Go",
                completed: false,
              },
            ],
          },
          {
            id: "august-day8",
            date: "30 Juli",
            dayName: "Selasa",
            tasks: [
              {
                id: "august-task8-1",
                text: "Mempelajari protobuf definitions",
                completed: false,
              },
              {
                id: "august-task8-2",
                text: "Memahami service dan message types",
                completed: false,
              },
              {
                id: "august-task8-3",
                text: "Latihan: Membuat proto files",
                completed: false,
              },
            ],
          },
          {
            id: "august-day9",
            date: "31 Juli",
            dayName: "Rabu",
            tasks: [
              {
                id: "august-task9-1",
                text: "Mempelajari unary RPC",
                completed: false,
              },
              {
                id: "august-task9-2",
                text: "Memahami client dan server implementation",
                completed: false,
              },
              {
                id: "august-task9-3",
                text: "Latihan: Implementasi simple gRPC service",
                completed: false,
              },
            ],
          },
          {
            id: "august-day10",
            date: "1 Agustus",
            dayName: "Kamis",
            tasks: [
              {
                id: "august-task10-1",
                text: "Mempelajari server streaming",
                completed: false,
              },
              {
                id: "august-task10-2",
                text: "Memahami client streaming",
                completed: false,
              },
              {
                id: "august-task10-3",
                text: "Latihan: Implementasi streaming gRPC",
                completed: false,
              },
            ],
          },
          {
            id: "august-day11",
            date: "2 Agustus",
            dayName: "Jumat",
            tasks: [
              {
                id: "august-task11-1",
                text: "Mempelajari bidirectional streaming",
                completed: false,
              },
              {
                id: "august-task11-2",
                text: "Memahami error handling di gRPC",
                completed: false,
              },
              {
                id: "august-task11-3",
                text: "Mini-project: Chat service dengan gRPC",
                completed: false,
              },
            ],
          },
          {
            id: "august-day12",
            date: "3-4 Agustus",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "august-task12-1",
                text: "Review materi minggu 2",
                completed: false,
              },
              {
                id: "august-task12-2",
                text: "Riset gRPC vs REST",
                completed: false,
              },
              {
                id: "august-task12-3",
                text: "Eksperimen dengan gRPC Gateway",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "august-week3",
        name: "Minggu 3: Advanced gRPC & Microservice Communication",
        expanded: false,
        days: [
          {
            id: "august-day13",
            date: "5 Agustus",
            dayName: "Senin",
            tasks: [
              {
                id: "august-task13-1",
                text: "Mempelajari gRPC interceptors",
                completed: false,
              },
              {
                id: "august-task13-2",
                text: "Memahami middleware di gRPC",
                completed: false,
              },
              {
                id: "august-task13-3",
                text: "Latihan: Implementasi auth interceptor",
                completed: false,
              },
            ],
          },
          {
            id: "august-day14",
            date: "6 Agustus",
            dayName: "Selasa",
            tasks: [
              {
                id: "august-task14-1",
                text: "Mempelajari gRPC load balancing",
                completed: false,
              },
              {
                id: "august-task14-2",
                text: "Memahami service health checking",
                completed: false,
              },
              {
                id: "august-task14-3",
                text: "Latihan: Setup client-side load balancing",
                completed: false,
              },
            ],
          },
          {
            id: "august-day15",
            date: "7 Agustus",
            dayName: "Rabu",
            tasks: [
              {
                id: "august-task15-1",
                text: "Mempelajari gRPC deadlines dan cancellation",
                completed: false,
              },
              {
                id: "august-task15-2",
                text: "Memahami context propagation",
                completed: false,
              },
              {
                id: "august-task15-3",
                text: "Latihan: Implementasi timeout handling",
                completed: false,
              },
            ],
          },
          {
            id: "august-day16",
            date: "8 Agustus",
            dayName: "Kamis",
            tasks: [
              {
                id: "august-task16-1",
                text: "Mempelajari gRPC metadata",
                completed: false,
              },
              {
                id: "august-task16-2",
                text: "Memahami header propagation",
                completed: false,
              },
              {
                id: "august-task16-3",
                text: "Latihan: Implementasi distributed tracing",
                completed: false,
              },
            ],
          },
          {
            id: "august-day17",
            date: "9 Agustus",
            dayName: "Jumat",
            tasks: [
              {
                id: "august-task17-1",
                text: "Mempelajari gRPC error handling",
                completed: false,
              },
              {
                id: "august-task17-2",
                text: "Memahami status codes dan details",
                completed: false,
              },
              {
                id: "august-task17-3",
                text: "Mini-project: Robust error handling system",
                completed: false,
              },
            ],
          },
          {
            id: "august-day18",
            date: "10-11 Agustus",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "august-task18-1",
                text: "Review materi minggu 3",
                completed: false,
              },
              {
                id: "august-task18-2",
                text: "Riset advanced gRPC patterns",
                completed: false,
              },
              {
                id: "august-task18-3",
                text: "Eksperimen dengan gRPC performance tuning",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "august-week4",
        name: "Minggu 4: Event-Driven Architecture",
        expanded: false,
        days: [
          {
            id: "august-day19",
            date: "12 Agustus",
            dayName: "Senin",
            tasks: [
              {
                id: "august-task19-1",
                text: "Mempelajari konsep event-driven architecture",
                completed: false,
              },
              {
                id: "august-task19-2",
                text: "Memahami events vs commands",
                completed: false,
              },
              {
                id: "august-task19-3",
                text: "Latihan: Design event schema",
                completed: false,
              },
            ],
          },
          {
            id: "august-day20",
            date: "13 Agustus",
            dayName: "Selasa",
            tasks: [
              {
                id: "august-task20-1",
                text: "Mempelajari event sourcing",
                completed: false,
              },
              {
                id: "august-task20-2",
                text: "Memahami CQRS pattern",
                completed: false,
              },
              {
                id: "august-task20-3",
                text: "Latihan: Implementasi event store",
                completed: false,
              },
            ],
          },
          {
            id: "august-day21",
            date: "14 Agustus",
            dayName: "Rabu",
            tasks: [
              {
                id: "august-task21-1",
                text: "Mempelajari Kafka dasar",
                completed: false,
              },
              {
                id: "august-task21-2",
                text: "Memahami topics dan partitions",
                completed: false,
              },
              {
                id: "august-task21-3",
                text: "Latihan: Setup Kafka dengan Go",
                completed: false,
              },
            ],
          },
          {
            id: "august-day22",
            date: "15 Agustus",
            dayName: "Kamis",
            tasks: [
              {
                id: "august-task22-1",
                text: "Mempelajari event-driven microservices",
                completed: false,
              },
              {
                id: "august-task22-2",
                text: "Memahami saga pattern",
                completed: false,
              },
              {
                id: "august-task22-3",
                text: "Latihan: Implementasi distributed transaction",
                completed: false,
              },
            ],
          },
          {
            id: "august-day23",
            date: "16 Agustus",
            dayName: "Jumat",
            tasks: [
              {
                id: "august-task23-1",
                text: "Mempelajari eventual consistency",
                completed: false,
              },
              {
                id: "august-task23-2",
                text: "Memahami conflict resolution",
                completed: false,
              },
              {
                id: "august-task23-3",
                text: "Mini-project: Event-driven notification system",
                completed: false,
              },
            ],
          },
          {
            id: "august-day24",
            date: "17-18 Agustus",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "august-task24-1",
                text: "Proyek Akhir Bulan: Microservice E-commerce System",
                completed: false,
              },
              {
                id: "august-task24-2",
                text: "Multiple services (user, product, order)",
                completed: false,
              },
              {
                id: "august-task24-3",
                text: "gRPC communication",
                completed: false,
              },
              {
                id: "august-task24-4",
                text: "Event-driven architecture",
                completed: false,
              },
              {
                id: "august-task24-5",
                text: "Service discovery dan load balancing",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "september-2025",
    name: "September 2025",
    title: "WebSockets & Realtime",
    progress: 0,
    weeks: [
      {
        id: "september-week1",
        name: "Minggu 1: WebSocket Fundamentals",
        expanded: false,
        days: [
          {
            id: "september-day1",
            date: "19 Agustus",
            dayName: "Senin",
            tasks: [
              {
                id: "september-task1-1",
                text: "Mempelajari konsep WebSocket",
                completed: false,
              },
              {
                id: "september-task1-2",
                text: "Memahami WebSocket vs HTTP",
                completed: false,
              },
              {
                id: "september-task1-3",
                text: "Latihan: Setup WebSocket server",
                completed: false,
              },
            ],
          },
          {
            id: "september-day2",
            date: "20 Agustus",
            dayName: "Selasa",
            tasks: [
              {
                id: "september-task2-1",
                text: "Mempelajari Gorilla WebSocket",
                completed: false,
              },
              {
                id: "september-task2-2",
                text: "Memahami connection handling",
                completed: false,
              },
              {
                id: "september-task2-3",
                text: "Latihan: Implementasi echo server",
                completed: false,
              },
            ],
          },
          {
            id: "september-day3",
            date: "21 Agustus",
            dayName: "Rabu",
            tasks: [
              {
                id: "september-task3-1",
                text: "Mempelajari message format",
                completed: false,
              },
              {
                id: "september-task3-2",
                text: "Memahami JSON vs binary messages",
                completed: false,
              },
              {
                id: "september-task3-3",
                text: "Latihan: Message serialization",
                completed: false,
              },
            ],
          },
          {
            id: "september-day4",
            date: "22 Agustus",
            dayName: "Kamis",
            tasks: [
              {
                id: "september-task4-1",
                text: "Mempelajari connection management",
                completed: false,
              },
              {
                id: "september-task4-2",
                text: "Memahami heartbeats dan ping/pong",
                completed: false,
              },
              {
                id: "september-task4-3",
                text: "Latihan: Implementasi connection timeout",
                completed: false,
              },
            ],
          },
          {
            id: "september-day5",
            date: "23 Agustus",
            dayName: "Jumat",
            tasks: [
              {
                id: "september-task5-1",
                text: "Mempelajari error handling WebSocket",
                completed: false,
              },
              {
                id: "september-task5-2",
                text: "Memahami reconnection strategies",
                completed: false,
              },
              {
                id: "september-task5-3",
                text: "Mini-project: Simple chat application",
                completed: false,
              },
            ],
          },
          {
            id: "september-day6",
            date: "24-25 Agustus",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "september-task6-1",
                text: "Review materi minggu 1",
                completed: false,
              },
              {
                id: "september-task6-2",
                text: "Riset WebSocket security best practices",
                completed: false,
              },
              {
                id: "september-task6-3",
                text: "Eksperimen dengan WebSocket compression",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "september-week2",
        name: "Minggu 2: Realtime Applications",
        expanded: false,
        days: [
          {
            id: "september-day7",
            date: "26 Agustus",
            dayName: "Senin",
            tasks: [
              {
                id: "september-task7-1",
                text: "Mempelajari broadcasting patterns",
                completed: false,
              },
              {
                id: "september-task7-2",
                text: "Memahami pub/sub dengan WebSocket",
                completed: false,
              },
              {
                id: "september-task7-3",
                text: "Latihan: Implementasi broadcast server",
                completed: false,
              },
            ],
          },
          {
            id: "september-day8",
            date: "27 Agustus",
            dayName: "Selasa",
            tasks: [
              {
                id: "september-task8-1",
                text: "Mempelajari room-based communication",
                completed: false,
              },
              {
                id: "september-task8-2",
                text: "Memahami dynamic channel subscription",
                completed: false,
              },
              {
                id: "september-task8-3",
                text: "Latihan: Implementasi chat rooms",
                completed: false,
              },
            ],
          },
          {
            id: "september-day9",
            date: "28 Agustus",
            dayName: "Rabu",
            tasks: [
              {
                id: "september-task9-1",
                text: "Mempelajari presence tracking",
                completed: false,
              },
              {
                id: "september-task9-2",
                text: "Memahami user status management",
                completed: false,
              },
              {
                id: "september-task9-3",
                text: "Latihan: Online status indicator",
                completed: false,
              },
            ],
          },
          {
            id: "september-day10",
            date: "29 Agustus",
            dayName: "Kamis",
            tasks: [
              {
                id: "september-task10-1",
                text: "Mempelajari message delivery confirmation",
                completed: false,
              },
              {
                id: "september-task10-2",
                text: "Memahami read receipts",
                completed: false,
              },
              {
                id: "september-task10-3",
                text: "Latihan: Implementasi message status",
                completed: false,
              },
            ],
          },
          {
            id: "september-day11",
            date: "30 Agustus",
            dayName: "Jumat",
            tasks: [
              {
                id: "september-task11-1",
                text: "Mempelajari offline message handling",
                completed: false,
              },
              {
                id: "september-task11-2",
                text: "Memahami message queueing",
                completed: false,
              },
              {
                id: "september-task11-3",
                text: "Mini-project: Message inbox dengan unread counter",
                completed: false,
              },
            ],
          },
          {
            id: "september-day12",
            date: "31 Agustus - 1 September",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "september-task12-1",
                text: "Review materi minggu 2",
                completed: false,
              },
              {
                id: "september-task12-2",
                text: "Riset realtime app architectures",
                completed: false,
              },
              {
                id: "september-task12-3",
                text: "Eksperimen dengan scaling WebSocket",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "september-week3",
        name: "Minggu 3: Server-Sent Events & Alternative Protocols",
        expanded: false,
        days: [
          {
            id: "september-day13",
            date: "2 September",
            dayName: "Senin",
            tasks: [
              {
                id: "september-task13-1",
                text: "Mempelajari Server-Sent Events (SSE)",
                completed: false,
              },
              {
                id: "september-task13-2",
                text: "Memahami EventSource API",
                completed: false,
              },
              {
                id: "september-task13-3",
                text: "Latihan: Implementasi SSE server",
                completed: false,
              },
            ],
          },
          {
            id: "september-day14",
            date: "3 September",
            dayName: "Selasa",
            tasks: [
              {
                id: "september-task14-1",
                text: "Mempelajari long polling",
                completed: false,
              },
              {
                id: "september-task14-2",
                text: "Memahami WebSocket fallbacks",
                completed: false,
              },
              {
                id: "september-task14-3",
                text: "Latihan: Implementasi polling fallback",
                completed: false,
              },
            ],
          },
          {
            id: "september-day15",
            date: "4 September",
            dayName: "Rabu",
            tasks: [
              {
                id: "september-task15-1",
                text: "Mempelajari Socket.IO",
                completed: false,
              },
              {
                id: "september-task15-2",
                text: "Memahami transport upgrades",
                completed: false,
              },
              {
                id: "september-task15-3",
                text: "Latihan: Socket.IO dengan Go backend",
                completed: false,
              },
            ],
          },
          {
            id: "september-day16",
            date: "5 September",
            dayName: "Kamis",
            tasks: [
              {
                id: "september-task16-1",
                text: "Mempelajari MQTT protocol",
                completed: false,
              },
              {
                id: "september-task16-2",
                text: "Memahami IoT communication",
                completed: false,
              },
              {
                id: "september-task16-3",
                text: "Latihan: Setup MQTT broker",
                completed: false,
              },
            ],
          },
          {
            id: "september-day17",
            date: "6 September",
            dayName: "Jumat",
            tasks: [
              {
                id: "september-task17-1",
                text: "Mempelajari realtime data visualization",
                completed: false,
              },
              {
                id: "september-task17-2",
                text: "Memahami streaming metrics",
                completed: false,
              },
              {
                id: "september-task17-3",
                text: "Mini-project: Dashboard dengan realtime updates",
                completed: false,
              },
            ],
          },
          {
            id: "september-day18",
            date: "7-8 September",
            dayName: "Sabtu & Minggu",
            tasks: [
              {
                id: "september-task18-1",
                text: "Review materi minggu 3",
                completed: false,
              },
              {
                id: "september-task18-2",
                text: "Riset realtime protocol comparisons",
                completed: false,
              },
              {
                id: "september-task18-3",
                text: "Eksperimen dengan berbagai realtime options",
                completed: false,
              },
            ],
          },
        ],
        week4: {
          id: "september-week4",
          name: "Minggu 4: Scaling Realtime Applications",
          expanded: false,
          days: [
            {
              id: "september-day19",
              date: "9 September",
              dayName: "Senin",
              tasks: [
                {
                  id: "september-task19-1",
                  text: "Mempelajari connection pooling",
                  completed: false,
                },
                {
                  id: "september-task19-2",
                  text: "Memahami WebSocket clustering",
                  completed: false,
                },
                {
                  id: "september-task19-3",
                  text: "Latihan: Setup WebSocket load balancing",
                  completed: false,
                },
              ],
            },
            {
              id: "september-day20",
              date: "10 September",
              dayName: "Selasa",
              tasks: [
                {
                  id: "september-task20-1",
                  text: "Mempelajari Redis pub/sub untuk scaling",
                  completed: false,
                },
                {
                  id: "september-task20-2",
                  text: "Memahami sticky sessions",
                  completed: false,
                },
                {
                  id: "september-task20-3",
                  text: "Latihan: Multi-server broadcast",
                  completed: false,
                },
              ],
            },
            {
              id: "september-day21",
              date: "11 September",
              dayName: "Rabu",
              tasks: [
                {
                  id: "september-task21-1",
                  text: "Mempelajari connection rate limiting",
                  completed: false,
                },
                {
                  id: "september-task21-2",
                  text: "Memahami reconnection backoff",
                  completed: false,
                },
                {
                  id: "september-task21-3",
                  text: "Latihan: Implementasi circuit breaker",
                  completed: false,
                },
              ],
            },
            {
              id: "september-day22",
              date: "12 September",
              dayName: "Kamis",
              tasks: [
                {
                  id: "september-task22-1",
                  text: "Mempelajari connection authentication",
                  completed: false,
                },
                {
                  id: "september-task22-2",
                  text: "Memahami JWT dengan WebSocket",
                  completed: false,
                },
                {
                  id: "september-task22-3",
                  text: "Latihan: Secure WebSocket connections",
                  completed: false,
                },
              ],
            },
            {
              id: "september-day23",
              date: "13 September",
              dayName: "Jumat",
              tasks: [
                {
                  id: "september-task23-1",
                  text: "Mempelajari monitoring WebSocket",
                  completed: false,
                },
                {
                  id: "september-task23-2",
                  text: "Memahami metrics collection",
                  completed: false,
                },
                {
                  id: "september-task23-3",
                  text: "Mini-project: WebSocket health dashboard",
                  completed: false,
                },
              ],
            },
            {
              id: "september-day24",
              date: "14-15 September",
              dayName: "Sabtu & Minggu",
              tasks: [
                {
                  id: "september-task24-1",
                  text: "Proyek Akhir Bulan: Realtime Collaboration App",
                  completed: false,
                },
                {
                  id: "september-task24-2",
                  text: "Fitur chat rooms dan private messaging",
                  completed: false,
                },
                {
                  id: "september-task24-3",
                  text: "Presence indicators dan typing notifications",
                  completed: false,
                },
                {
                  id: "september-task24-4",
                  text: "File sharing dan media preview",
                  completed: false,
                },
                {
                  id: "september-task24-5",
                  text: "Offline message sync",
                  completed: false,
                },
              ],
            },
          ],
        },
      },
      {
        weeks: [
          {
            id: "october-week1",
            name: "Minggu 1: Docker Fundamentals",
            expanded: false,
            days: [
              {
                id: "october-day1",
                date: "16 September",
                dayName: "Senin",
                tasks: [
                  {
                    id: "october-task1-1",
                    text: "Mempelajari konsep containerization",
                    completed: false,
                  },
                  {
                    id: "october-task1-2",
                    text: "Memahami Docker vs VM",
                    completed: false,
                  },
                  {
                    id: "october-task1-3",
                    text: "Latihan: Instalasi Docker",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day2",
                date: "17 September",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "october-task2-1",
                    text: "Mempelajari Dockerfile",
                    completed: false,
                  },
                  {
                    id: "october-task2-2",
                    text: "Memahami Docker images dan layers",
                    completed: false,
                  },
                  {
                    id: "october-task2-3",
                    text: "Latihan: Membuat Docker image untuk Go app",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day3",
                date: "18 September",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "october-task3-1",
                    text: "Mempelajari Docker containers",
                    completed: false,
                  },
                  {
                    id: "october-task3-2",
                    text: "Memahami container lifecycle",
                    completed: false,
                  },
                  {
                    id: "october-task3-3",
                    text: "Latihan: Running dan managing containers",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day4",
                date: "19 September",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "october-task4-1",
                    text: "Mempelajari Docker volumes",
                    completed: false,
                  },
                  {
                    id: "october-task4-2",
                    text: "Memahami data persistence",
                    completed: false,
                  },
                  {
                    id: "october-task4-3",
                    text: "Latihan: Setup volume mounts",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day5",
                date: "20 September",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "october-task5-1",
                    text: "Mempelajari Docker networking",
                    completed: false,
                  },
                  {
                    id: "october-task5-2",
                    text: "Memahami bridge networks",
                    completed: false,
                  },
                  {
                    id: "october-task5-3",
                    text: "Mini-project: Multi-container app",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day6",
                date: "21-22 September",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "october-task6-1",
                    text: "Review materi minggu 1",
                    completed: false,
                  },
                  {
                    id: "october-task6-2",
                    text: "Riset Docker best practices",
                    completed: false,
                  },
                  {
                    id: "october-task6-3",
                    text: "Eksperimen dengan Docker optimization",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "october-week2",
            name: "Minggu 2: Docker Compose & Multi-Container Apps",
            expanded: false,
            days: [
              {
                id: "october-day7",
                date: "23 September",
                dayName: "Senin",
                tasks: [
                  {
                    id: "october-task7-1",
                    text: "Mempelajari Docker Compose",
                    completed: false,
                  },
                  {
                    id: "october-task7-2",
                    text: "Memahami docker-compose.yml",
                    completed: false,
                  },
                  {
                    id: "october-task7-3",
                    text: "Latihan: Setup multi-service composition",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day8",
                date: "24 September",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "october-task8-1",
                    text: "Mempelajari service dependencies",
                    completed: false,
                  },
                  {
                    id: "october-task8-2",
                    text: "Memahami healthchecks",
                    completed: false,
                  },
                  {
                    id: "october-task8-3",
                    text: "Latihan: Ordered service startup",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day9",
                date: "25 September",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "october-task9-1",
                    text: "Mempelajari environment variables",
                    completed: false,
                  },
                  {
                    id: "october-task9-2",
                    text: "Memahami configuration management",
                    completed: false,
                  },
                  {
                    id: "october-task9-3",
                    text: "Latihan: Environment-specific configs",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day10",
                date: "26 September",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "october-task10-1",
                    text: "Mempelajari Docker networks",
                    completed: false,
                  },
                  {
                    id: "october-task10-2",
                    text: "Memahami service discovery",
                    completed: false,
                  },
                  {
                    id: "october-task10-3",
                    text: "Latihan: Inter-service communication",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day11",
                date: "27 September",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "october-task11-1",
                    text: "Mempelajari container scaling",
                    completed: false,
                  },
                  {
                    id: "october-task11-2",
                    text: "Memahami load balancing",
                    completed: false,
                  },
                  {
                    id: "october-task11-3",
                    text: "Mini-project: Scalable web app dengan Compose",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day12",
                date: "28-29 September",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "october-task12-1",
                    text: "Review materi minggu 2",
                    completed: false,
                  },
                  {
                    id: "october-task12-2",
                    text: "Riset production-ready Compose setups",
                    completed: false,
                  },
                  {
                    id: "october-task12-3",
                    text: "Eksperimen dengan Docker Compose override files",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "october-week3",
            name: "Minggu 3: Kubernetes Basics",
            expanded: false,
            days: [
              {
                id: "october-day13",
                date: "30 September",
                dayName: "Senin",
                tasks: [
                  {
                    id: "october-task13-1",
                    text: "Mempelajari konsep Kubernetes",
                    completed: false,
                  },
                  {
                    id: "october-task13-2",
                    text: "Memahami container orchestration",
                    completed: false,
                  },
                  {
                    id: "october-task13-3",
                    text: "Latihan: Setup minikube",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day14",
                date: "1 Oktober",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "october-task14-1",
                    text: "Mempelajari Kubernetes objects",
                    completed: false,
                  },
                  {
                    id: "october-task14-2",
                    text: "Memahami Pods dan Deployments",
                    completed: false,
                  },
                  {
                    id: "october-task14-3",
                    text: "Latihan: Deploy Go app di Kubernetes",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day15",
                date: "2 Oktober",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "october-task15-1",
                    text: "Mempelajari Services",
                    completed: false,
                  },
                  {
                    id: "october-task15-2",
                    text: "Memahami networking di Kubernetes",
                    completed: false,
                  },
                  {
                    id: "october-task15-3",
                    text: "Latihan: Expose deployment dengan Service",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day16",
                date: "3 Oktober",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "october-task16-1",
                    text: "Mempelajari ConfigMaps dan Secrets",
                    completed: false,
                  },
                  {
                    id: "october-task16-2",
                    text: "Memahami configuration management",
                    completed: false,
                  },
                  {
                    id: "october-task16-3",
                    text: "Latihan: Config injection ke Pods",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day17",
                date: "4 Oktober",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "october-task17-1",
                    text: "Mempelajari Persistent Volumes",
                    completed: false,
                  },
                  {
                    id: "october-task17-2",
                    text: "Memahami stateful applications",
                    completed: false,
                  },
                  {
                    id: "october-task17-3",
                    text: "Mini-project: Stateful service di Kubernetes",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day18",
                date: "5-6 Oktober",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "october-task18-1",
                    text: "Review materi minggu 3",
                    completed: false,
                  },
                  {
                    id: "october-task18-2",
                    text: "Riset Kubernetes architecture",
                    completed: false,
                  },
                  {
                    id: "october-task18-3",
                    text: "Eksperimen dengan kubectl commands",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "october-week4",
            name: "Minggu 4: Cloud Deployment & Advanced K8s",
            expanded: false,
            days: [
              {
                id: "october-day19",
                date: "7 Oktober",
                dayName: "Senin",
                tasks: [
                  {
                    id: "october-task19-1",
                    text: "Mempelajari cloud providers (AWS, GCP, Azure)",
                    completed: false,
                  },
                  {
                    id: "october-task19-2",
                    text: "Memahami cloud services",
                    completed: false,
                  },
                  {
                    id: "october-task19-3",
                    text: "Latihan: Setup cloud account dan CLI tools",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day20",
                date: "8 Oktober",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "october-task20-1",
                    text: "Mempelajari Kubernetes di cloud",
                    completed: false,
                  },
                  {
                    id: "october-task20-2",
                    text: "Memahami managed Kubernetes services",
                    completed: false,
                  },
                  {
                    id: "october-task20-3",
                    text: "Latihan: Setup EKS, GKE, atau AKS cluster",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day21",
                date: "9 Oktober",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "october-task21-1",
                    text: "Mempelajari CI/CD untuk cloud",
                    completed: false,
                  },
                  {
                    id: "october-task21-2",
                    text: "Memahami GitHub Actions atau GitLab CI",
                    completed: false,
                  },
                  {
                    id: "october-task21-3",
                    text: "Latihan: Setup deployment pipeline",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day22",
                date: "10 Oktober",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "october-task22-1",
                    text: "Mempelajari Helm charts",
                    completed: false,
                  },
                  {
                    id: "october-task22-2",
                    text: "Memahami package management untuk K8s",
                    completed: false,
                  },
                  {
                    id: "october-task22-3",
                    text: "Latihan: Create dan deploy Helm chart",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day23",
                date: "11 Oktober",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "october-task23-1",
                    text: "Mempelajari monitoring dan logging di cloud",
                    completed: false,
                  },
                  {
                    id: "october-task23-2",
                    text: "Memahami cloud observability",
                    completed: false,
                  },
                  {
                    id: "october-task23-3",
                    text: "Mini-project: Setup monitoring stack",
                    completed: false,
                  },
                ],
              },
              {
                id: "october-day24",
                date: "12-13 Oktober",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "october-task24-1",
                    text: "Proyek Akhir Bulan: Cloud-Native Microservice App",
                    completed: false,
                  },
                  {
                    id: "october-task24-2",
                    text: "Containerized services dengan Docker",
                    completed: false,
                  },
                  {
                    id: "october-task24-3",
                    text: "Orchestration dengan Kubernetes",
                    completed: false,
                  },
                  {
                    id: "october-task24-4",
                    text: "CI/CD pipeline untuk deployment",
                    completed: false,
                  },
                  {
                    id: "october-task24-5",
                    text: "Monitoring dan alerting",
                    completed: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        weeks: [
          {
            id: "november-week1",
            name: "Minggu 1: Logging & Tracing",
            expanded: false,
            days: [
              {
                id: "november-day1",
                date: "14 Oktober",
                dayName: "Senin",
                tasks: [
                  {
                    id: "november-task1-1",
                    text: "Mempelajari structured logging",
                    completed: false,
                  },
                  {
                    id: "november-task1-2",
                    text: "Memahami log levels dan formatting",
                    completed: false,
                  },
                  {
                    id: "november-task1-3",
                    text: "Latihan: Implementasi logger dengan Zap",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day2",
                date: "15 Oktober",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "november-task2-1",
                    text: "Mempelajari distributed tracing",
                    completed: false,
                  },
                  {
                    id: "november-task2-2",
                    text: "Memahami OpenTelemetry",
                    completed: false,
                  },
                  {
                    id: "november-task2-3",
                    text: "Latihan: Instrument aplikasi dengan traces",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day3",
                date: "16 Oktober",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "november-task3-1",
                    text: "Mempelajari context propagation",
                    completed: false,
                  },
                  {
                    id: "november-task3-2",
                    text: "Memahami trace IDs dan span IDs",
                    completed: false,
                  },
                  {
                    id: "november-task3-3",
                    text: "Latihan: Propagasi trace antarlayanan",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day4",
                date: "17 Oktober",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "november-task4-1",
                    text: "Mempelajari log aggregation",
                    completed: false,
                  },
                  {
                    id: "november-task4-2",
                    text: "Memahami ELK stack (Elasticsearch, Logstash, Kibana)",
                    completed: false,
                  },
                  {
                    id: "november-task4-3",
                    text: "Latihan: Setup ELK untuk aplikasi Go",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day5",
                date: "18 Oktober",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "november-task5-1",
                    text: "Mempelajari log analysis",
                    completed: false,
                  },
                  {
                    id: "november-task5-2",
                    text: "Memahami search queries dan visualisasi",
                    completed: false,
                  },
                  {
                    id: "november-task5-3",
                    text: "Mini-project: Dashboard log monitoring",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day6",
                date: "19-20 Oktober",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "november-task6-1",
                    text: "Review materi minggu 1",
                    completed: false,
                  },
                  {
                    id: "november-task6-2",
                    text: "Riset best practices untuk logging",
                    completed: false,
                  },
                  {
                    id: "november-task6-3",
                    text: "Eksperimen dengan berbagai logging tools",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "november-week2",
            name: "Minggu 2: Metrics & Monitoring",
            expanded: false,
            days: [
              {
                id: "november-day7",
                date: "21 Oktober",
                dayName: "Senin",
                tasks: [
                  {
                    id: "november-task7-1",
                    text: "Mempelajari metrics collection",
                    completed: false,
                  },
                  {
                    id: "november-task7-2",
                    text: "Memahami Prometheus",
                    completed: false,
                  },
                  {
                    id: "november-task7-3",
                    text: "Latihan: Instrument aplikasi dengan metrics",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day8",
                date: "22 Oktober",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "november-task8-1",
                    text: "Mempelajari metric types (counter, gauge, histogram)",
                    completed: false,
                  },
                  {
                    id: "november-task8-2",
                    text: "Memahami PromQL",
                    completed: false,
                  },
                  {
                    id: "november-task8-3",
                    text: "Latihan: Query dan visualisasi metrics",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day9",
                date: "23 Oktober",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "november-task9-1",
                    text: "Mempelajari Grafana",
                    completed: false,
                  },
                  {
                    id: "november-task9-2",
                    text: "Memahami dashboards dan alerts",
                    completed: false,
                  },
                  {
                    id: "november-task9-3",
                    text: "Latihan: Setup Grafana dashboard",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day10",
                date: "24 Oktober",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "november-task10-1",
                    text: "Mempelajari SLIs dan SLOs",
                    completed: false,
                  },
                  {
                    id: "november-task10-2",
                    text: "Memahami error budgets",
                    completed: false,
                  },
                  {
                    id: "november-task10-3",
                    text: "Latihan: Define SLIs untuk aplikasi",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day11",
                date: "25 Oktober",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "november-task11-1",
                    text: "Mempelajari blackbox monitoring",
                    completed: false,
                  },
                  {
                    id: "november-task11-2",
                    text: "Memahami synthetic monitoring",
                    completed: false,
                  },
                  {
                    id: "november-task11-3",
                    text: "Mini-project: End-to-end monitoring",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day12",
                date: "26-27 Oktober",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "november-task12-1",
                    text: "Review materi minggu 2",
                    completed: false,
                  },
                  {
                    id: "november-task12-2",
                    text: "Riset observability patterns",
                    completed: false,
                  },
                  {
                    id: "november-task12-3",
                    text: "Eksperimen dengan advanced dashboards",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "november-week3",
            name: "Minggu 3: CI/CD & GitOps",
            expanded: false,
            days: [
              {
                id: "november-day13",
                date: "28 Oktober",
                dayName: "Senin",
                tasks: [
                  {
                    id: "november-task13-1",
                    text: "Mempelajari CI/CD principles",
                    completed: false,
                  },
                  {
                    id: "november-task13-2",
                    text: "Memahami pipeline stages",
                    completed: false,
                  },
                  {
                    id: "november-task13-3",
                    text: "Latihan: Setup basic CI pipeline",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day14",
                date: "29 Oktober",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "november-task14-1",
                    text: "Mempelajari GitHub Actions",
                    completed: false,
                  },
                  {
                    id: "november-task14-2",
                    text: "Memahami workflows dan actions",
                    completed: false,
                  },
                  {
                    id: "november-task14-3",
                    text: "Latihan: Build dan test workflow",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day15",
                date: "30 Oktober",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "november-task15-1",
                    text: "Mempelajari GitOps",
                    completed: false,
                  },
                  {
                    id: "november-task15-2",
                    text: "Memahami infrastructure as code",
                    completed: false,
                  },
                  {
                    id: "november-task15-3",
                    text: "Latihan: Setup aplikasi dengan GitOps",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day16",
                date: "31 Oktober",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "november-task16-1",
                    text: "Mempelajari ArgoCD",
                    completed: false,
                  },
                  {
                    id: "november-task16-2",
                    text: "Memahami continuous deployment",
                    completed: false,
                  },
                  {
                    id: "november-task16-3",
                    text: "Latihan: Setup ArgoCD untuk Kubernetes",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day17",
                date: "1 November",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "november-task17-1",
                    text: "Mempelajari feature flags",
                    completed: false,
                  },
                  {
                    id: "november-task17-2",
                    text: "Memahami canary releases",
                    completed: false,
                  },
                  {
                    id: "november-task17-3",
                    text: "Mini-project: Setup progressive delivery",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day18",
                date: "2-3 November",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "november-task18-1",
                    text: "Review materi minggu 3",
                    completed: false,
                  },
                  {
                    id: "november-task18-2",
                    text: "Riset deployment strategies",
                    completed: false,
                  },
                  {
                    id: "november-task18-3",
                    text: "Eksperimen dengan multi-environment setup",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "november-week4",
            name: "Minggu 4: Infrastructure as Code",
            expanded: false,
            days: [
              {
                id: "november-day19",
                date: "4 November",
                dayName: "Senin",
                tasks: [
                  {
                    id: "november-task19-1",
                    text: "Mempelajari Terraform basics",
                    completed: false,
                  },
                  {
                    id: "november-task19-2",
                    text: "Memahami HCL syntax",
                    completed: false,
                  },
                  {
                    id: "november-task19-3",
                    text: "Latihan: Setup Terraform project",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day20",
                date: "5 November",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "november-task20-1",
                    text: "Mempelajari Terraform providers",
                    completed: false,
                  },
                  {
                    id: "november-task20-2",
                    text: "Memahami resources dan data sources",
                    completed: false,
                  },
                  {
                    id: "november-task20-3",
                    text: "Latihan: Provisioning cloud resources",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day21",
                date: "6 November",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "november-task21-1",
                    text: "Mempelajari Terraform modules",
                    completed: false,
                  },
                  {
                    id: "november-task21-2",
                    text: "Memahami state management",
                    completed: false,
                  },
                  {
                    id: "november-task21-3",
                    text: "Latihan: Buat reusable module",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day22",
                date: "7 November",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "november-task22-1",
                    text: "Mempelajari Terraform dengan Kubernetes",
                    completed: false,
                  },
                  {
                    id: "november-task22-2",
                    text: "Memahami Kubernetes provider",
                    completed: false,
                  },
                  {
                    id: "november-task22-3",
                    text: "Latihan: Deploy K8s resources dengan Terraform",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day23",
                date: "8 November",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "november-task23-1",
                    text: "Mempelajari security scanning",
                    completed: false,
                  },
                  {
                    id: "november-task23-2",
                    text: "Memahami policy as code",
                    completed: false,
                  },
                  {
                    id: "november-task23-3",
                    text: "Mini-project: Setup security scanning pipeline",
                    completed: false,
                  },
                ],
              },
              {
                id: "november-day24",
                date: "9-10 November",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "november-task24-1",
                    text: "Proyek Akhir Bulan: DevOps Automation Platform",
                    completed: false,
                  },
                  {
                    id: "november-task24-2",
                    text: "CI/CD pipeline untuk Go microservices",
                    completed: false,
                  },
                  {
                    id: "november-task24-3",
                    text: "Infrastructure as Code dengan Terraform",
                    completed: false,
                  },
                  {
                    id: "november-task24-4",
                    text: "Monitoring stack dengan Prometheus dan Grafana",
                    completed: false,
                  },
                  {
                    id: "november-task24-5",
                    text: "Centralized logging dengan ELK",
                    completed: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        weeks: [
          {
            id: "december-week1",
            name: "Minggu 1: Go Design Patterns",
            expanded: false,
            days: [
              {
                id: "december-day1",
                date: "11 November",
                dayName: "Senin",
                tasks: [
                  {
                    id: "december-task1-1",
                    text: "Mempelajari creational patterns di Go",
                    completed: false,
                  },
                  {
                    id: "december-task1-2",
                    text: "Memahami factory, builder, singleton",
                    completed: false,
                  },
                  {
                    id: "december-task1-3",
                    text: "Latihan: Implementasi builder pattern",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day2",
                date: "12 November",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "december-task2-1",
                    text: "Mempelajari structural patterns di Go",
                    completed: false,
                  },
                  {
                    id: "december-task2-2",
                    text: "Memahami adapter, decorator, facade",
                    completed: false,
                  },
                  {
                    id: "december-task2-3",
                    text: "Latihan: Implementasi adapter pattern",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day3",
                date: "13 November",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "december-task3-1",
                    text: "Mempelajari behavioral patterns di Go",
                    completed: false,
                  },
                  {
                    id: "december-task3-2",
                    text: "Memahami observer, strategy, command",
                    completed: false,
                  },
                  {
                    id: "december-task3-3",
                    text: "Latihan: Implementasi strategy pattern",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day4",
                date: "14 November",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "december-task4-1",
                    text: "Mempelajari functional patterns di Go",
                    completed: false,
                  },
                  {
                    id: "december-task4-2",
                    text: "Memahami options pattern, functional options",
                    completed: false,
                  },
                  {
                    id: "december-task4-3",
                    text: "Latihan: Implementasi functional options",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day5",
                date: "15 November",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "december-task5-1",
                    text: "Mempelajari concurrency patterns di Go",
                    completed: false,
                  },
                  {
                    id: "december-task5-2",
                    text: "Memahami pipeline, fan-out/fan-in, worker pool",
                    completed: false,
                  },
                  {
                    id: "december-task5-3",
                    text: "Mini-project: Pipeline processing system",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day6",
                date: "16-17 November",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "december-task6-1",
                    text: "Review materi minggu 1",
                    completed: false,
                  },
                  {
                    id: "december-task6-2",
                    text: "Riset idioms Go vs design patterns",
                    completed: false,
                  },
                  {
                    id: "december-task6-3",
                    text: "Eksperimen dengan berbagai pattern implementations",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "december-week2",
            name: "Minggu 2: Clean Architecture",
            expanded: false,
            days: [
              {
                id: "december-day7",
                date: "18 November",
                dayName: "Senin",
                tasks: [
                  {
                    id: "december-task7-1",
                    text: "Mempelajari principles of clean architecture",
                    completed: false,
                  },
                  {
                    id: "december-task7-2",
                    text: "Memahami separation of concerns",
                    completed: false,
                  },
                  {
                    id: "december-task7-3",
                    text: "Latihan: Refactor monolithic app",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day8",
                date: "19 November",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "december-task8-1",
                    text: "Mempelajari domain-driven design",
                    completed: false,
                  },
                  {
                    id: "december-task8-2",
                    text: "Memahami entities, value objects, aggregates",
                    completed: false,
                  },
                  {
                    id: "december-task8-3",
                    text: "Latihan: Implement domain model",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day9",
                date: "20 November",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "december-task9-1",
                    text: "Mempelajari use cases dan boundaries",
                    completed: false,
                  },
                  {
                    id: "december-task9-2",
                    text: "Memahami input/output ports",
                    completed: false,
                  },
                  {
                    id: "december-task9-3",
                    text: "Latihan: Implement use case layer",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day10",
                date: "21 November",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "december-task10-1",
                    text: "Mempelajari dependency injection di Go",
                    completed: false,
                  },
                  {
                    id: "december-task10-2",
                    text: "Memahami repositories dan services",
                    completed: false,
                  },
                  {
                    id: "december-task10-3",
                    text: "Latihan: Implement infrastructure layer",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day11",
                date: "22 November",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "december-task11-1",
                    text: "Mempelajari hexagonal architecture",
                    completed: false,
                  },
                  {
                    id: "december-task11-2",
                    text: "Memahami adapters dan ports",
                    completed: false,
                  },
                  {
                    id: "december-task11-3",
                    text: "Mini-project: Refactor API dengan clean architecture",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day12",
                date: "23-24 November",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "december-task12-1",
                    text: "Review materi minggu 2",
                    completed: false,
                  },
                  {
                    id: "december-task12-2",
                    text: "Riset variations of clean architecture",
                    completed: false,
                  },
                  {
                    id: "december-task12-3",
                    text: "Eksperimen dengan Go architecture patterns",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "december-week3",
            name: "Minggu 3: Advanced Go Techniques",
            expanded: false,
            days: [
              {
                id: "december-day13",
                date: "25 November",
                dayName: "Senin",
                tasks: [
                  {
                    id: "december-task13-1",
                    text: "Mempelajari Go generics",
                    completed: false,
                  },
                  {
                    id: "december-task13-2",
                    text: "Memahami type parameters dan constraints",
                    completed: false,
                  },
                  {
                    id: "december-task13-3",
                    text: "Latihan: Implement generic data structures",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day14",
                date: "26 November",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "december-task14-1",
                    text: "Mempelajari reflection di Go",
                    completed: false,
                  },
                  {
                    id: "december-task14-2",
                    text: "Memahami Type dan Value",
                    completed: false,
                  },
                  {
                    id: "december-task14-3",
                    text: "Latihan: Build dynamic config parser",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day15",
                date: "27 November",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "december-task15-1",
                    text: "Mempelajari metaprogramming di Go",
                    completed: false,
                  },
                  {
                    id: "december-task15-2",
                    text: "Memahami code generation",
                    completed: false,
                  },
                  {
                    id: "december-task15-3",
                    text: "Latihan: Generate boilerplate code",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day16",
                date: "28 November",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "december-task16-1",
                    text: "Mempelajari Go AST",
                    completed: false,
                  },
                  {
                    id: "december-task16-2",
                    text: "Memahami abstract syntax tree",
                    completed: false,
                  },
                  {
                    id: "december-task16-3",
                    text: "Latihan: Build simple linter",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day17",
                date: "29 November",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "december-task17-1",
                    text: "Mempelajari unsafe package",
                    completed: false,
                  },
                  {
                    id: "december-task17-2",
                    text: "Memahami memory layout dan pointers",
                    completed: false,
                  },
                  {
                    id: "december-task17-3",
                    text: "Mini-project: Performance optimization",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day18",
                date: "30 November-1 Desember",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "december-task18-1",
                    text: "Review materi minggu 3",
                    completed: false,
                  },
                  {
                    id: "december-task18-2",
                    text: "Riset advanced Go features",
                    completed: false,
                  },
                  {
                    id: "december-task18-3",
                    text: "Eksperimen dengan Go internals",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "december-week4",
            name: "Minggu 4: Performance Optimization",
            expanded: false,
            days: [
              {
                id: "december-day19",
                date: "2 Desember",
                dayName: "Senin",
                tasks: [
                  {
                    id: "december-task19-1",
                    text: "Mempelajari Go memory model",
                    completed: false,
                  },
                  {
                    id: "december-task19-2",
                    text: "Memahami garbage collection",
                    completed: false,
                  },
                  {
                    id: "december-task19-3",
                    text: "Latihan: Memory profiling",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day20",
                date: "3 Desember",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "december-task20-1",
                    text: "Mempelajari CPU profiling",
                    completed: false,
                  },
                  {
                    id: "december-task20-2",
                    text: "Memahami flame graphs",
                    completed: false,
                  },
                  {
                    id: "december-task20-3",
                    text: "Latihan: Identify dan fix bottlenecks",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day21",
                date: "4 Desember",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "december-task21-1",
                    text: "Mempelajari data structures optimization",
                    completed: false,
                  },
                  {
                    id: "december-task21-2",
                    text: "Memahami memory allocation dan escape analysis",
                    completed: false,
                  },
                  {
                    id: "december-task21-3",
                    text: "Latihan: Optimize struct layout",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day22",
                date: "5 Desember",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "december-task22-1",
                    text: "Mempelajari concurrency optimizations",
                    completed: false,
                  },
                  {
                    id: "december-task22-2",
                    text: "Memahami mutex contention dan lock-free algorithms",
                    completed: false,
                  },
                  {
                    id: "december-task22-3",
                    text: "Latihan: Optimize concurrent code",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day23",
                date: "6 Desember",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "december-task23-1",
                    text: "Mempelajari cgo dan performance trade-offs",
                    completed: false,
                  },
                  {
                    id: "december-task23-2",
                    text: "Memahami compiler optimizations",
                    completed: false,
                  },
                  {
                    id: "december-task23-3",
                    text: "Mini-project: Benchmark-driven optimization",
                    completed: false,
                  },
                ],
              },
              {
                id: "december-day24",
                date: "7-8 Desember",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "december-task24-1",
                    text: "Proyek Akhir Bulan: High-Performance API Server",
                    completed: false,
                  },
                  {
                    id: "december-task24-2",
                    text: "Clean architecture implementation",
                    completed: false,
                  },
                  {
                    id: "december-task24-3",
                    text: "Optimized data structures dan algorithms",
                    completed: false,
                  },
                  {
                    id: "december-task24-4",
                    text: "Efficient concurrency patterns",
                    completed: false,
                  },
                  {
                    id: "december-task24-5",
                    text: "Comprehensive benchmarks dan profiling",
                    completed: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        weeks: [
          {
            id: "january-week1",
            name: "Minggu 1: System Design Principles",
            expanded: false,
            days: [
              {
                id: "january-day1",
                date: "9 Desember",
                dayName: "Senin",
                tasks: [
                  {
                    id: "january-task1-1",
                    text: "Mempelajari scalability principles",
                    completed: false,
                  },
                  {
                    id: "january-task1-2",
                    text: "Memahami horizontal vs vertical scaling",
                    completed: false,
                  },
                  {
                    id: "january-task1-3",
                    text: "Latihan: Identify scaling bottlenecks",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day2",
                date: "10 Desember",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "january-task2-1",
                    text: "Mempelajari availability principles",
                    completed: false,
                  },
                  {
                    id: "january-task2-2",
                    text: "Memahami redundancy dan fault tolerance",
                    completed: false,
                  },
                  {
                    id: "january-task2-3",
                    text: "Latihan: Design high-availability system",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day3",
                date: "11 Desember",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "january-task3-1",
                    text: "Mempelajari reliability principles",
                    completed: false,
                  },
                  {
                    id: "january-task3-2",
                    text: "Memahami failure modes dan recovery",
                    completed: false,
                  },
                  {
                    id: "january-task3-3",
                    text: "Latihan: Implement graceful degradation",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day4",
                date: "12 Desember",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "january-task4-1",
                    text: "Mempelajari maintainability principles",
                    completed: false,
                  },
                  {
                    id: "january-task4-2",
                    text: "Memahami technical debt dan refactoring",
                    completed: false,
                  },
                  {
                    id: "january-task4-3",
                    text: "Latihan: Code quality metrics",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day5",
                date: "13 Desember",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "january-task5-1",
                    text: "Mempelajari security principles",
                    completed: false,
                  },
                  {
                    id: "january-task5-2",
                    text: "Memahami defense in depth",
                    completed: false,
                  },
                  {
                    id: "january-task5-3",
                    text: "Mini-project: Security audit dan improvement",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day6",
                date: "14-15 Desember",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "january-task6-1",
                    text: "Review materi minggu 1",
                    completed: false,
                  },
                  {
                    id: "january-task6-2",
                    text: "Riset system design case studies",
                    completed: false,
                  },
                  {
                    id: "january-task6-3",
                    text: "Eksperimen dengan design trade-offs",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "january-week2",
            name: "Minggu 2: Scalable Data Management",
            expanded: false,
            days: [
              {
                id: "january-day7",
                date: "16 Desember",
                dayName: "Senin",
                tasks: [
                  {
                    id: "january-task7-1",
                    text: "Mempelajari database sharding",
                    completed: false,
                  },
                  {
                    id: "january-task7-2",
                    text: "Memahami partitioning strategies",
                    completed: false,
                  },
                  {
                    id: "january-task7-3",
                    text: "Latihan: Implement database sharding",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day8",
                date: "17 Desember",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "january-task8-1",
                    text: "Mempelajari database replication",
                    completed: false,
                  },
                  {
                    id: "january-task8-2",
                    text: "Memahami primary-replica dan multi-master",
                    completed: false,
                  },
                  {
                    id: "january-task8-3",
                    text: "Latihan: Setup database replication",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day9",
                date: "18 Desember",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "january-task9-1",
                    text: "Mempelajari data partitioning",
                    completed: false,
                  },
                  {
                    id: "january-task9-2",
                    text: "Memahami vertical dan horizontal partitioning",
                    completed: false,
                  },
                  {
                    id: "january-task9-3",
                    text: "Latihan: Design partitioning scheme",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day10",
                date: "19 Desember",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "january-task10-1",
                    text: "Mempelajari distributed caching",
                    completed: false,
                  },
                  {
                    id: "january-task10-2",
                    text: "Memahami cache coherence dan invalidation",
                    completed: false,
                  },
                  {
                    id: "january-task10-3",
                    text: "Latihan: Implement multi-level cache",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day11",
                date: "20 Desember",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "january-task11-1",
                    text: "Mempelajari data indexing strategies",
                    completed: false,
                  },
                  {
                    id: "january-task11-2",
                    text: "Memahami search optimization",
                    completed: false,
                  },
                  {
                    id: "january-task11-3",
                    text: "Mini-project: Advanced search implementation",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day12",
                date: "21-22 Desember",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "january-task12-1",
                    text: "Review materi minggu 2",
                    completed: false,
                  },
                  {
                    id: "january-task12-2",
                    text: "Riset data management case studies",
                    completed: false,
                  },
                  {
                    id: "january-task12-3",
                    text: "Eksperimen dengan data access patterns",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "january-week3",
            name: "Minggu 3: Load Balancing & Service Discovery",
            expanded: false,
            days: [
              {
                id: "january-day13",
                date: "23 Desember",
                dayName: "Senin",
                tasks: [
                  {
                    id: "january-task13-1",
                    text: "Mempelajari load balancing algorithms",
                    completed: false,
                  },
                  {
                    id: "january-task13-2",
                    text: "Memahami round-robin, least connections, IP hash",
                    completed: false,
                  },
                  {
                    id: "january-task13-3",
                    text: "Latihan: Implement custom load balancer",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day14",
                date: "24 Desember",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "january-task14-1",
                    text: "Mempelajari layer 4 vs layer 7 load balancing",
                    completed: false,
                  },
                  {
                    id: "january-task14-2",
                    text: "Memahami TLS termination dan SSL passthrough",
                    completed: false,
                  },
                  {
                    id: "january-task14-3",
                    text: "Latihan: Configure advanced load balancing",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day15",
                date: "25 Desember",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "january-task15-1",
                    text: "Mempelajari service discovery patterns",
                    completed: false,
                  },
                  {
                    id: "january-task15-2",
                    text: "Memahami client-side vs server-side discovery",
                    completed: false,
                  },
                  {
                    id: "january-task15-3",
                    text: "Latihan: Implement service registry",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day16",
                date: "26 Desember",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "january-task16-1",
                    text: "Mempelajari service mesh architecture",
                    completed: false,
                  },
                  {
                    id: "january-task16-2",
                    text: "Memahami Istio dan Linkerd",
                    completed: false,
                  },
                  {
                    id: "january-task16-3",
                    text: "Latihan: Setup simple service mesh",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day17",
                date: "27 Desember",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "january-task17-1",
                    text: "Mempelajari health checking dan failover",
                    completed: false,
                  },
                  {
                    id: "january-task17-2",
                    text: "Memahami readiness dan liveness probes",
                    completed: false,
                  },
                  {
                    id: "january-task17-3",
                    text: "Mini-project: Resilient service discovery",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day18",
                date: "28-29 Desember",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "january-task18-1",
                    text: "Review materi minggu 3",
                    completed: false,
                  },
                  {
                    id: "january-task18-2",
                    text: "Riset industry load balancing practices",
                    completed: false,
                  },
                  {
                    id: "january-task18-3",
                    text: "Eksperimen dengan discovery mechanisms",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "january-week4",
            name: "Minggu 4: Resilient System Design",
            expanded: false,
            days: [
              {
                id: "january-day19",
                date: "30 Desember",
                dayName: "Senin",
                tasks: [
                  {
                    id: "january-task19-1",
                    text: "Mempelajari distributed systems failure modes",
                    completed: false,
                  },
                  {
                    id: "january-task19-2",
                    text: "Memahami CAP theorem",
                    completed: false,
                  },
                  {
                    id: "january-task19-3",
                    text: "Latihan: Analyze system resilience",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day20",
                date: "31 Desember",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "january-task20-1",
                    text: "Mempelajari resilience patterns",
                    completed: false,
                  },
                  {
                    id: "january-task20-2",
                    text: "Memahami circuit breaker, retries, bulkhead",
                    completed: false,
                  },
                  {
                    id: "january-task20-3",
                    text: "Latihan: Implement retry dengan backoff",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day21",
                date: "1 Januari",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "january-task21-1",
                    text: "Mempelajari fault injection testing",
                    completed: false,
                  },
                  {
                    id: "january-task21-2",
                    text: "Memahami chaos engineering",
                    completed: false,
                  },
                  {
                    id: "january-task21-3",
                    text: "Latihan: Implement simple chaos test",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day22",
                date: "2 Januari",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "january-task22-1",
                    text: "Mempelajari distributed transactions",
                    completed: false,
                  },
                  {
                    id: "january-task22-2",
                    text: "Memahami two-phase commit dan sagas",
                    completed: false,
                  },
                  {
                    id: "january-task22-3",
                    text: "Latihan: Implement saga pattern",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day23",
                date: "3 Januari",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "january-task23-1",
                    text: "Mempelajari disaster recovery",
                    completed: false,
                  },
                  {
                    id: "january-task23-2",
                    text: "Memahami backup strategies dan RPO/RTO",
                    completed: false,
                  },
                  {
                    id: "january-task23-3",
                    text: "Mini-project: Disaster recovery plan",
                    completed: false,
                  },
                ],
              },
              {
                id: "january-day24",
                date: "4-5 Januari",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "january-task24-1",
                    text: "Proyek Akhir Bulan: Scalable E-commerce Backend",
                    completed: false,
                  },
                  {
                    id: "january-task24-2",
                    text: "High-availability design",
                    completed: false,
                  },
                  {
                    id: "january-task24-3",
                    text: "Sharded database dengan replication",
                    completed: false,
                  },
                  {
                    id: "january-task24-4",
                    text: "Load balancing dan service discovery",
                    completed: false,
                  },
                  {
                    id: "january-task24-5",
                    text: "Resilience patterns implementation",
                    completed: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        weeks: [
          {
            id: "february-week1",
            name: "Minggu 1: Open Source Contribution",
            expanded: false,
            days: [
              {
                id: "february-day1",
                date: "6 Januari",
                dayName: "Senin",
                tasks: [
                  {
                    id: "february-task1-1",
                    text: "Mempelajari open source participation",
                    completed: false,
                  },
                  {
                    id: "february-task1-2",
                    text: "Memahami contribution guidelines",
                    completed: false,
                  },
                  {
                    id: "february-task1-3",
                    text: "Latihan: Find potential projects to contribute",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day2",
                date: "7 Januari",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "february-task2-1",
                    text: "Mempelajari GitHub workflows",
                    completed: false,
                  },
                  {
                    id: "february-task2-2",
                    text: "Memahami forks, branches, dan PRs",
                    completed: false,
                  },
                  {
                    id: "february-task2-3",
                    text: "Latihan: Fork dan setup local environment",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day3",
                date: "8 Januari",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "february-task3-1",
                    text: "Mempelajari issue triage",
                    completed: false,
                  },
                  {
                    id: "february-task3-2",
                    text: "Memahami good first issues",
                    completed: false,
                  },
                  {
                    id: "february-task3-3",
                    text: "Latihan: Analyze dan comment on open issues",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day4",
                date: "9 Januari",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "february-task4-1",
                    text: "Mempelajari code review process",
                    completed: false,
                  },
                  {
                    id: "february-task4-2",
                    text: "Memahami review etiquette",
                    completed: false,
                  },
                  {
                    id: "february-task4-3",
                    text: "Latihan: Review existing PRs",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day5",
                date: "10 Januari",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "february-task5-1",
                    text: "Mempelajari documentation contributions",
                    completed: false,
                  },
                  {
                    id: "february-task5-2",
                    text: "Memahami effective technical writing",
                    completed: false,
                  },
                  {
                    id: "february-task5-3",
                    text: "Mini-project: Submit documentation improvement",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day6",
                date: "11-12 Januari",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "february-task6-1",
                    text: "Review materi minggu 1",
                    completed: false,
                  },
                  {
                    id: "february-task6-2",
                    text: "Riset active Go open source projects",
                    completed: false,
                  },
                  {
                    id: "february-task6-3",
                    text: "Submit first small PR to a project",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "february-week2",
            name: "Minggu 2: Personal Project Development",
            expanded: false,
            days: [
              {
                id: "february-day7",
                date: "13 Januari",
                dayName: "Senin",
                tasks: [
                  {
                    id: "february-task7-1",
                    text: "Mempelajari project idea validation",
                    completed: false,
                  },
                  {
                    id: "february-task7-2",
                    text: "Memahami minimum viable product",
                    completed: false,
                  },
                  {
                    id: "february-task7-3",
                    text: "Latihan: Brainstorm dan validate project ideas",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day8",
                date: "14 Januari",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "february-task8-1",
                    text: "Mempelajari project management",
                    completed: false,
                  },
                  {
                    id: "february-task8-2",
                    text: "Memahami roadmap development",
                    completed: false,
                  },
                  {
                    id: "february-task8-3",
                    text: "Latihan: Create project roadmap dan specifications",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day9",
                date: "15 Januari",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "february-task9-1",
                    text: "Mempelajari project setup best practices",
                    completed: false,
                  },
                  {
                    id: "february-task9-2",
                    text: "Memahami monorepo vs multi-repo",
                    completed: false,
                  },
                  {
                    id: "february-task9-3",
                    text: "Latihan: Initialize project repository",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day10",
                date: "16 Januari",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "february-task10-1",
                    text: "Mempelajari CI/CD untuk personal projects",
                    completed: false,
                  },
                  {
                    id: "february-task10-2",
                    text: "Memahami development workflows",
                    completed: false,
                  },
                  {
                    id: "february-task10-3",
                    text: "Latihan: Setup CI pipeline untuk project",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day11",
                date: "17 Januari",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "february-task11-1",
                    text: "Mempelajari project documentation",
                    completed: false,
                  },
                  {
                    id: "february-task11-2",
                    text: "Memahami README dan contribution guidelines",
                    completed: false,
                  },
                  {
                    id: "february-task11-3",
                    text: "Mini-project: Create comprehensive project documentation",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day12",
                date: "18-19 Januari",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "february-task12-1",
                    text: "Review materi minggu 2",
                    completed: false,
                  },
                  {
                    id: "february-task12-2",
                    text: "Riset successful open source project structures",
                    completed: false,
                  },
                  {
                    id: "february-task12-3",
                    text: "Work on core features for personal project",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "february-week3",
            name: "Minggu 3: Building an Online Presence",
            expanded: false,
            days: [
              {
                id: "february-day13",
                date: "20 Januari",
                dayName: "Senin",
                tasks: [
                  {
                    id: "february-task13-1",
                    text: "Mempelajari GitHub profile optimization",
                    completed: false,
                  },
                  {
                    id: "february-task13-2",
                    text: "Memahami profile READMEs dan pinned repositories",
                    completed: false,
                  },
                  {
                    id: "february-task13-3",
                    text: "Latihan: Create professional GitHub profile",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day14",
                date: "21 Januari",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "february-task14-1",
                    text: "Mempelajari technical blogging",
                    completed: false,
                  },
                  {
                    id: "february-task14-2",
                    text: "Memahami effective technical writing",
                    completed: false,
                  },
                  {
                    id: "february-task14-3",
                    text: "Latihan: Plan series of technical blog posts",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day15",
                date: "22 Januari",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "february-task15-1",
                    text: "Mempelajari personal website development",
                    completed: false,
                  },
                  {
                    id: "february-task15-2",
                    text: "Memahami portfolio design",
                    completed: false,
                  },
                  {
                    id: "february-task15-3",
                    text: "Latihan: Design personal developer website",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day16",
                date: "23 Januari",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "february-task16-1",
                    text: "Mempelajari social media strategy",
                    completed: false,
                  },
                  {
                    id: "february-task16-2",
                    text: "Memahami LinkedIn dan Twitter optimization",
                    completed: false,
                  },
                  {
                    id: "february-task16-3",
                    text: "Latihan: Optimize LinkedIn profile",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day17",
                date: "24 Januari",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "february-task17-1",
                    text: "Mempelajari developer communities",
                    completed: false,
                  },
                  {
                    id: "february-task17-2",
                    text: "Memahami networking strategies",
                    completed: false,
                  },
                  {
                    id: "february-task17-3",
                    text: "Mini-project: Contribute to technical discussions",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day18",
                date: "25-26 Januari",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "february-task18-1",
                    text: "Review materi minggu 3",
                    completed: false,
                  },
                  {
                    id: "february-task18-2",
                    text: "Publish first technical blog post",
                    completed: false,
                  },
                  {
                    id: "february-task18-3",
                    text: "Continue developing personal website",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "february-week4",
            name: "Minggu 4: Teknologi Emerging & Community Engagement",
            expanded: false,
            days: [
              {
                id: "february-day19",
                date: "27 Januari",
                dayName: "Senin",
                tasks: [
                  {
                    id: "february-task19-1",
                    text: "Mempelajari emerging Go ecosystem trends",
                    completed: false,
                  },
                  {
                    id: "february-task19-2",
                    text: "Memahami Go 2 proposals dan roadmap",
                    completed: false,
                  },
                  {
                    id: "february-task19-3",
                    text: "Latihan: Experiment dengan experimental features",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day20",
                date: "28 Januari",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "february-task20-1",
                    text: "Mempelajari community meetups dan conferences",
                    completed: false,
                  },
                  {
                    id: "february-task20-2",
                    text: "Memahami talk proposals dan presentations",
                    completed: false,
                  },
                  {
                    id: "february-task20-3",
                    text: "Latihan: Prepare lightning talk outline",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day21",
                date: "29 Januari",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "february-task21-1",
                    text: "Mempelajari mentorship opportunities",
                    completed: false,
                  },
                  {
                    id: "february-task21-2",
                    text: "Memahami teaching dan sharing knowledge",
                    completed: false,
                  },
                  {
                    id: "february-task21-3",
                    text: "Latihan: Create tutorial for beginners",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day22",
                date: "30 Januari",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "february-task22-1",
                    text: "Mempelajari open source maintenance",
                    completed: false,
                  },
                  {
                    id: "february-task22-2",
                    text: "Memahami sustainable open source",
                    completed: false,
                  },
                  {
                    id: "february-task22-3",
                    text: "Latihan: Create contributor guidelines",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day23",
                date: "31 Januari",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "february-task23-1",
                    text: "Mempelajari personal brand consistency",
                    completed: false,
                  },
                  {
                    id: "february-task23-2",
                    text: "Memahami career growth dan networking",
                    completed: false,
                  },
                  {
                    id: "february-task23-3",
                    text: "Mini-project: Create career development plan",
                    completed: false,
                  },
                ],
              },
              {
                id: "february-day24",
                date: "1-2 Februari",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "february-task24-1",
                    text: "Proyek Akhir Bulan: Open Source Go Library",
                    completed: false,
                  },
                  {
                    id: "february-task24-2",
                    text: "Release personal project v1.0",
                    completed: false,
                  },
                  {
                    id: "february-task24-3",
                    text: "Complete personal website dan blog",
                    completed: false,
                  },
                  {
                    id: "february-task24-4",
                    text: "Create contribution guidelines dan roadmap",
                    completed: false,
                  },
                  {
                    id: "february-task24-5",
                    text: "Publish comprehensive documentation",
                    completed: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        weeks: [
          {
            id: "march-week1",
            name: "Minggu 1: Fullstack Architecture Integration",
            expanded: false,
            days: [
              {
                id: "march-day1",
                date: "3 Februari",
                dayName: "Senin",
                tasks: [
                  {
                    id: "march-task1-1",
                    text: "Mempelajari fullstack architecture patterns",
                    completed: false,
                  },
                  {
                    id: "march-task1-2",
                    text: "Memahami frontend-backend communication",
                    completed: false,
                  },
                  {
                    id: "march-task1-3",
                    text: "Latihan: Design fullstack system architecture",
                    completed: false,
                  },
                ],
              },
              {
                id: "march-day2",
                date: "4 Februari",
                dayName: "Selasa",
                tasks: [
                  {
                    id: "march-task2-1",
                    text: "Mempelajari API design untuk frontend consumption",
                    completed: false,
                  },
                  {
                    id: "march-task2-2",
                    text: "Memahami REST vs GraphQL trade-offs",
                    completed: false,
                  },
                  {
                    id: "march-task2-3",
                    text: "Latihan: Design API schema for Next.js app",
                    completed: false,
                  },
                ],
              },
              {
                id: "march-day3",
                date: "5 Februari",
                dayName: "Rabu",
                tasks: [
                  {
                    id: "march-task3-1",
                    text: "Mempelajari authentication flows",
                    completed: false,
                  },
                  {
                    id: "march-task3-2",
                    text: "Memahami session vs token auth",
                    completed: false,
                  },
                  {
                    id: "march-task3-3",
                    text: "Latihan: Implement auth flow dengan Next.js dan Go",
                    completed: false,
                  },
                ],
              },
              {
                id: "march-day4",
                date: "6 Februari",
                dayName: "Kamis",
                tasks: [
                  {
                    id: "march-task4-1",
                    text: "Mempelajari data fetching patterns",
                    completed: false,
                  },
                  {
                    id: "march-task4-2",
                    text: "Memahami SWR/React Query dengan Go backend",
                    completed: false,
                  },
                  {
                    id: "march-task4-3",
                    text: "Latihan: Implement optimistic updates",
                    completed: false,
                  },
                ],
              },
              {
                id: "march-day5",
                date: "7 Februari",
                dayName: "Jumat",
                tasks: [
                  {
                    id: "march-task5-1",
                    text: "Mempelajari real-time communication",
                    completed: false,
                  },
                  {
                    id: "march-task5-2",
                    text: "Memahami WebSockets dengan Next.js dan Go",
                    completed: false,
                  },
                  {
                    id: "march-task5-3",
                    text: "Mini-project: Real-time notification system",
                    completed: false,
                  },
                ],
              },
              {
                id: "march-day6",
                date: "8-9 Februari",
                dayName: "Sabtu & Minggu",
                tasks: [
                  {
                    id: "march-task6-1",
                    text: "Review materi minggu 1",
                    completed: false,
                  },
                  {
                    id: "march-task6-2",
                    text: "Riset fullstack architecture case studies",
                    completed: false,
                  },
                  {
                    id: "march-task6-3",
                    text: "Start fullstack project skeleton",
                    completed: false,
                  },
                ],
              },
            ],
          },
          {
            id: "march-week2",
            name: "Minggu 2: Frontend-Backend Data Flow",
            expanded: false,
            days: [
              {
                id: "march-day7",
                date: "10 Februari",
                dayName: "Senin",
                tasks: [
                  {
                    id: "march-task7-1",
                    text: "Mempelajari form handling dan validation",
                    completed: false,
                  },
                  {
                    id: "march-task7-2",
                    text: "Memahami client vs server validation",
                    completed: false,
                  },
                  {
                    id: "march-task7-3",
                    text: "Latihan: Implement end-to-end form validation",
                    completed: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];


        