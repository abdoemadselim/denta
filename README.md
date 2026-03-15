# Denta System — UI Structure & Design Specification

This document defines the **internal system pages and UI design**

The design follows a **modern SaaS interface** with:

* Minimal layout
* Soft gradients
* Rounded cards
* RTL Arabic interface
* Large whitespace
* Clean typography

---

# 1. Global Layout

The application uses an **RTL layout** consistent with the landing page.

```
Top Navigation
-----------------------------------
Sidebar (right) | Main Workspace
```

### Background

Soft gradient background used across system pages:

```css
background: linear-gradient(180deg, #F8FAFF, #EEF3FF);
```

### Card Style

Cards follow the same style used in landing page sections.

```css
border-radius: 18px;
padding: 24px;
background: white;
box-shadow: 0 8px 30px rgba(0,0,0,0.05);
```

---

# 2. Top Navigation

The top navigation reuses the **landing page header style**.

### Structure

Left side:

```
Logo + System Name
```

Center:

```
Search Bar
```

Right side:

```
Notifications Icon
User Avatar
```

### Search Field Style

```css
height: 42px;
border-radius: 999px;
background: #F3F6FF;
```

---

# 3. Sidebar

The sidebar appears as a **floating card panel**.

### Sidebar Style

```css
width: 260px;
background: white;
border-radius: 22px;
padding: 20px;
box-shadow: 0 12px 40px rgba(0,0,0,0.05);
```

### Navigation Items

```
لوحة التحكم
المواعيد
المرضى
الرسائل
التقارير
```

### Active Item Style

```css
background: #EEF4FF;
color: #3B82F6;
```

---

# 4. Dashboard Page

### Layout

```
Stats Cards
Today's Appointments
Alerts
```

### Stats Cards

Four cards displaying key metrics.

Example:

```
[icon]

245
عدد المرضى

+12 هذا الأسبوع
```

Grid layout:

```
4 cards
```

---

### Today's Appointments

Displayed inside a large card.

| الوقت | المريض | الطبيب | الحالة |
| ----- | ------ | ------ | ------ |

Status badges:

| Status    | Color |
| --------- | ----- |
| Scheduled | Blue  |
| Completed | Green |
| Cancelled | Red   |

Badge style:

```css
border-radius: 999px;
padding: 6px 12px;
font-size: 12px;
```

---

# 5. Patients Page

### Page Header

```
المرضى
```

Subtext:

```
إدارة جميع المرضى المسجلين
```

---

### Search Section

Large search input:

```
ابحث باسم المريض أو رقم الهاتف
```

Action button:

```
+ مريض جديد
```

Button style uses the **same blue gradient as the landing page CTA**.

---

### Patient List Card

Floating card containing table.

| الاسم | الهاتف | العمر | آخر زيارة | إجراءات |
| ----- | ------ | ----- | --------- | ------- |

Row hover effect:

```css
background: #F9FBFF;
```

---

# 6. Patient Profile Page

This is the **most important page for doctors**.

### Layout

```
Patient Card
--------------------------------
Tabs
```

---

### Patient Summary Card

Displays basic patient information.

```
[Avatar]

خالد إبراهيم
العمر: 34
الهاتف: 05XXXXXXXX
```

Alerts:

```
⚠ حساسية: بنسلين
⚠ مرض مزمن: سكري
```

Action buttons:

```
زيارة جديدة
وصفة طبية
```

Primary button style:

```css
background: linear-gradient(135deg,#3B82F6,#2563EB);
border-radius: 999px;
```

---

# 7. Visits Tab (Medical History)

Uses a **timeline layout** instead of a table.

Example:

```
● 12 مايو

تنظيف الأسنان
الدكتور أحمد

التشخيص:
التهاب لثة بسيط
```

Timeline indicator color:

```css
#3B82F6
```

---

# 8. Visit Page (Doctor Workspace)

Clean layout with vertically stacked sections.

```
Diagnosis
Treatment Plan
Doctor Notes
Files
```

---

### Diagnosis Field

```css
min-height: 120px;
border-radius: 14px;
```

---

### File Upload Area

Drag-and-drop zone.

```css
border: 2px dashed #CBD5E1;
background: #F7F9FF;
border-radius: 16px;
```

Supported files:

```
X-ray
Image
PDF
```

---

# 9. Prescription Page

Medication table inside a card.

| الدواء | الجرعة | المدة | التعليمات |
| ------ | ------ | ----- | --------- |

Add medication button:

```
+ إضافة دواء
```

---

### Print Prescription

Primary button:

```
طباعة الوصفة
```

Printed layout includes:

```
Clinic Logo
Doctor Name
Patient Name
Medication Table
Signature
```

---

# 10. Notifications & Reminders

Tabs navigation.

```
تذكيرات المواعيد
تذكيرات الأدوية
المتابعات
الحملات
```

Example reminder card:

```
محمد أحمد
موعد غداً 10:00

[إرسال تذكير]
```

---

# 11. Reports Page

Minimal charts with card layout.

Reports include:

```
Patients per month
Appointments per doctor
Visit types
```

Chart containers follow card style:

```css
background: white;
border-radius: 18px;
box-shadow: 0 8px 30px rgba(0,0,0,0.05);
```

---

# Typography

Primary font:

```
Cairo
```

Font sizes:

| Element       | Size |
| ------------- | ---- |
| Section Title | 28px |
| Card Title    | 18px |
| Body Text     | 14px |

---

# Buttons

### Primary Button

```css
background: linear-gradient(135deg,#3B82F6,#2563EB);
border-radius: 999px;
height: 44px;
padding: 0 22px;
color: white;
```

### Secondary Button

```css
border: 1px solid #3B82F6;
color: #3B82F6;
background: white;
```

---

# Final UX Goals

The system maintains a **consistent product experience**:

* Landing Page → Marketing
* Dashboard → System overview
* Patient Profile → Core workflow

All pages share:

* The same color palette
* The same card design
* The same typography
* The same rounded button style

This ensures the **entire product feels like one cohesive SaaS platform**.
