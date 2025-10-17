# 📋 Task CLI — أداة إدارة المهام من سطر الأوامر

> ⌨️ بناء CLI عملي وممتع باستخدام **TypeScript + Node.js** — بدون مكتبات خارجية!

## 🔗 رابط المشروع على GitHub
[https://github.com/riyadhalmtiri43ty56uu/task-cli](https://github.com/riyadhalmtiri43ty56uu/task-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)

قم بإدارة مهامك اليومية مباشرة من الطرفية — أضف، حدّث، احذف، غيّر الحالة، واعرض المهام بكل سهولة.

---

⭐ **إذا أعجبك المشروع — لا تنسى الضغط على "Star" لدعم المطور!**

---

## ✨ الميزات

- ✅ إضافة مهام جديدة
- ✅ تحديث وصف المهمة
- ✅ حذف مهمة
- ✅ تغيير حالة المهمة: `قيد التقدم` أو `منجزة`
- ✅ عرض جميع المهام أو تصفيتها حسب الحالة (`todo`, `in-progress`, `done`)
- ✅ تخزين المهام في ملف `tasks.json` محلي (بدون قواعد بيانات!)
- ✅ مكتوب بـ TypeScript مع دعم كامل للأخطاء والحالات الحدية
- ✅ يعمل كأداة عالمية على جهازك بعد التثبيت

---

## 🛠️ المتطلبات

- [Node.js](https://nodejs.org/) v18 أو أعلى
- npm (يأتي مع Node.js)
- نظام تشغيل: Windows / macOS / Linux

---

## 📥 التثبيت

### الخطوة 1: استنساخ المشروع

git clone https://github.com/riyadhalmtiri43ty56uu/task-cli.git
cd task-cli

الخطوة 2: تثبيت التبعيات

npm install
الخطوة 3: بناء المشروع

npm run build
الخطوة 4: ربط الأداة عالميًا

npm link
✅ الآن يمكنك استخدام task-cli من أي مكان في جهازك!

🧭 الاستخدام
إضافة مهمة جديدة

task-cli add "تعلم Docker"
# → تم اضافة المهمة بنجاح (ID: 1)
تحديث مهمة

task-cli update 1 "تعلم Docker و Kubernetes"
حذف مهمة

task-cli delete 1
تغيير الحالة

task-cli mark-in-progress 1
task-cli mark-done 1
عرض المهام

task-cli list                 # عرض كل المهام
task-cli list todo            # عرض المهام المعلقة
task-cli list in-progress     # عرض المهام قيد العمل
task-cli list done            # عرض المهام المنجزة

🗃️ هيكل ملف المهام
يتم تخزين المهام في ملف tasks.json في نفس المجلد الذي تشغّل منه الأمر، وبهيكل كالتالي:

JSON

[
  {
    "id": 1,
    "description": "تعلم TypeScript",
    "status": "in-progress",
    "createdAt": "2025-04-05T10:00:00.000Z",
    "updatedAt": "2025-04-05T12:30:00.000Z"
  }
]
🧩 التقنيات المستخدمة
لغة: TypeScript
نظام الملفات: fs module (مضمن في Node.js)
CLI Arguments: process.argv
لا مكتبات خارجية — كما طلب المشروع!
🤝 كيف تساهم في المشروع؟
أهلاً بك! إذا عندك فكرة لتحسين الأداة:

افتح Issue لاقتراح الميزة.
أو Fork المشروع → عدل → أرسل Pull Request.
سأراجع مساهمتك وأدمجها بفرح ❤️
📜 الرخصة
هذا المشروع مرخص تحت رخصة MIT — يعني: استخدمه، عدله، وزعه كما تحب — حتى لأغراض تجارية.

🙋‍♂️ عن المطور
👨‍💻 مطور باك إند يحب التحديات وبناء أدوات عملية.
🔗 تابعني على GitHub: @riyadhalmtiri43ty56uu
💬 مفتوح للتواصل والمساعدة — لا تتردد!

