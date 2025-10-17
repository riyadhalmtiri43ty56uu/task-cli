# Task CLI

أداة سطر أوامر لإدارة المهام الشخصية.

## الأوامر:

- `task-cli add "وصف"` — إضافة مهمة جديدة
- `task-cli update <id> "وصف جديد"` — تعديل وصف مهمة
- `task-cli delete <id>` — حذف مهمة
- `task-cli mark-in-progress <id>` — وضع المهمة قيد التقدم
- `task-cli mark-done <id>` — وضع المهمة كمنجزة
- `task-cli list [status]` — عرض المهام (بدون status تعرض الكل)

الأحوال الممكنة لـ status: `todo`, `in-progress`, `done`
