import * as fs from "fs";
import { argv } from "process";

interface Task {
  id: number;
  description: string;
  status: "todo" | "in-progress" | "done";
  createdAt?: string;
  updatedAt: string;
}

const [, , command, ...args] = process.argv;

const TASK_FILE = "./tasks.json";

function loadTasks(): Task[] {
  try {
    if (!fs.existsSync(TASK_FILE)) {
      fs.writeFileSync(TASK_FILE, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const data = fs.readFileSync(TASK_FILE, "utf-8");

    // اذا الملف موجود لاكنه فارغ
    if (!data) {
      return [];
    }

    return JSON.parse(data) as Task[];
  } catch (error) {
    console.error("فشل تحميل المهام", (error as Error).message);
    process.exit(1);
  }
}

// تعيد void — لأنها لا تُرجع شيئًا، فقط تقوم بحفظ البيانات.
function saveTasks(tasks: Task[]): void {
  try {
    // كتابة البيانات إلى الملف
    fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2), "utf-8");
  } catch (error) {
    console.error("فشل في حفظ المهام", (error as Error).message);
    process.exit(1);
  }
}

// تنفيذ امر الاضافة add
if (command === "add") {
  const description = args.join(" ").trim();
  if (!description) {
    console.error("يجب كتابة وصف للمهمة");
    process.exit(1);
  }

  const tasks = loadTasks();
  const newTask: Task = {
    id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`تم اضافة المهمة بنجاح (ID: ${newTask.id})`);
}

// تنفيذ امر التحديث update
if (command === "update") {
  // التحقق من أن المستخدم أدخل ID ووصفاً
  if (args.length > 2) {
    console.error("الاستخدام الصحيح: task-cli update <id> <وصف جديد>");
    process.exit(1);
  }

  // استخراج ID من أول حجة — وتحويله لرقم
  const id = parseInt(args[0]!, 10);
  if (isNaN(id)) {
    console.error("الـ ID يجب أن يكون رقماً صحيحاً");
    process.exit(1);
  }

  if (args.length < 2) {
    console.error("يجب ادخال وصف جديد");
    process.exit(1);
  }

  // دمج باقي الحجج لتكوين الوصف الجديد
  const newDescription = args.slice(1).join(" ").trim();
  if (!newDescription) {
    console.error("يجب إدخال وصف جديد غير فارغ");
    process.exit(1);
  }

  // تحميل المهام الحالية
  const tasks = loadTasks();

  // البحث عن المهمة بالـ ID
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // إذا لم تُوجد المهمة
  if (taskIndex === -1) {
    console.error(`لاتوجد مهمة بال ID: ${id}`);
    process.exit(1);
  }

  // تحديث الوصف وتاريخ التعديل
  tasks[taskIndex]!.description = newDescription;
  tasks[taskIndex]!.updatedAt = new Date().toISOString();

  // حفظ المهام المحدثة
  saveTasks(tasks);

  // طباعة رسالة نجاح
  console.log(`تم تحديث المهمة  (ID: ${id}) بنجاح`);
}

// تنفيذ امر لحذف مهمة ما
if (command === "delete") {
  if (args.length < 1) {
    console.error("الاستخدام الصحيح: task-cli delete <id>");
    process.exit(1);
  }

  const id = parseInt(args[0]!, 10);
  if (isNaN(id)) {
    console.error("الـ ID يجب أن يكون رقماً صحيحاً");
    process.exit(1);
  }

  const tasks = loadTasks();

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.error(`لاتوجد مهمة بال ID: ${id}`);
    process.exit(1);
  }

  tasks.splice(taskIndex, 1);
  saveTasks(tasks);

  console.log(`تم حذف المهمة (ID: ${id}) بنجاح`);
}

if (command === "mark-in-progress") {
  if (args.length < 1) {
    console.error("الاستخدام الصحيح: mark-in-progress <id>");
    process.exit(1);
  }

  const id = parseInt(args[0]!, 10);
  if (isNaN(id)) {
    console.error("الـ ID يجب أن يكون رقماً صحيحاً");
    process.exit(1);
  }

  const tasks = loadTasks();

  const taskIndex = tasks.findIndex((tasks) => tasks.id === id);

  if (taskIndex === -1) {
    console.error(`لاتوجد مهمة بال ID: ${id}`);
    process.exit(1);
  }

  tasks[taskIndex]!.status = "in-progress";
  tasks[taskIndex]!.updatedAt = new Date().toISOString();
  saveTasks(tasks);

  console.log(`تم تحديث حالة المهمة (ID: ${id})بنجاح`);
}

if (command === "mark-done") {
  if (args.length < 1) {
    console.error("الاستخدام الصحيح: mark-done <id>");
    process.exit(1);
  }

  const id = parseInt(args[0]!, 10);
  if (isNaN(id)) {
    console.error("الـ ID يجب أن يكون رقماً صحيحاً");
    process.exit(1);
  }

  const tasks = loadTasks();

  const taskIndex = tasks.findIndex((tasks) => tasks.id === id);

  if (taskIndex === -1) {
    console.error(`لاتوجد مهمة بال ID: ${id}`);
    process.exit(1);
  }

  tasks[taskIndex]!.status = "done";
  tasks[taskIndex]!.updatedAt = new Date().toISOString();
  saveTasks(tasks);

  console.log(`تم تحديث حالة المهمة (ID: ${id})بنجاح`);
}

if (command === "list") {
  const tasks = loadTasks();

  const statusFilter = args[0];

  if (statusFilter && !["todo", "in-progress", "done"].includes(statusFilter)) {
    console.error("الحالة غير صالحة. استخدم: todo, in-progress, أو done");
    process.exit(1);
  }

  const filterTasks = statusFilter
    ? tasks.filter((task) => task.status === statusFilter)
    : tasks;

  printTask(filterTasks);

  function printTask(tasksToPrint: Task[]) {
    if (tasksToPrint.length === 0) {
      console.error("لا توجد مهام.");
    } else {
      tasksToPrint.forEach((task) => {
        console.log(`[${task.id}] ${task.description} - (${task.status})`);
        console.log(` اخر تحديث: ${new Date(task.updatedAt).toLocaleString()}`);
      });
    }
  }
}
