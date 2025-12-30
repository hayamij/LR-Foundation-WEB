# FRONTEND INTEGRATION GUIDE

## 🎯 ROUTES & DATA

### Home `/`
**View:** `pages/home.ejs`
```javascript
{
  title: 'Trang chủ',
  config: {...},
  page: 'home',
  statistics: { students: 500, families: 200, volunteers: 150 },
  latestStories: [{ id, title, excerpt, image, date, author }]
}
```

### About `/about`
**View:** `pages/about.ejs`
```javascript
{
  title: 'Về chúng tôi',
  config: {...},
  page: 'about',
  visionMission: { vision, mission, coreValues: [] },
  teamMembers: { leadership: [], staff: [] }
}
```

### About - Vision `/about/vision`
**View:** `pages/about/vision.ejs`
```javascript
{
  title: 'Tầm nhìn & Sứ mệnh',
  visionMission: {
    vision: { title, content },
    mission: { title, content },
    coreValues: [{ icon, title, description }]
  }
}
```

### About - Team `/about/team`
**View:** `pages/about/team.ejs`
```javascript
{
  title: 'Đội ngũ nhân sự',
  teamMembers: {
    leadership: [{ name, position, image, bio }],
    staff: [{ name, position, image }]
  }
}
```

### Programs `/programs`
**View:** `pages/programs.ejs`
```javascript
{
  title: 'Chương trình - Dự án',
  statistics: { students, families, volunteers }
}
```

### Programs - Education `/programs/education`
**View:** `pages/programs/education.ejs`
```javascript
{
  title: 'Hỗ trợ Giáo dục',
  programs: {
    overview: 'string',
    programs: [{ id, title, description, image, beneficiaries, status }]
  }
}
```

### Programs - Healthcare `/programs/healthcare`
**View:** `pages/programs/healthcare.ejs`
```javascript
{
  title: 'Y tế & Sức khỏe',
  programs: {
    overview: 'string',
    programs: [{ id, title, description, image, beneficiaries, status }]
  }
}
```

### Programs - Social `/programs/social`
**View:** `pages/programs/social.ejs`
```javascript
{
  title: 'Bác ái xã hội',
  programs: {
    overview: 'string',
    programs: [{ id, title, description, image, beneficiaries, status }]
  }
}
```

### Programs - Fundraising `/programs/fundraising`
**View:** `pages/programs/fundraising.ejs`
```javascript
{
  title: 'Gây quỹ',
  fundraising: {
    overview: 'string',
    campaigns: [{ id, title, description, goal, raised, supporters, deadline }],
    impact: { totalRaised, projectsFunded, beneficiaries }
  }
}
```

### News `/news`
**View:** `pages/news.ejs`
```javascript
{
  title: 'Tin tức & Tài liệu',
  latestReports: [{ id, title, date, fileUrl, summary }],
  latestStories: [{ id, title, excerpt, image, date, author }]
}
```

### News - Reports `/news/reports`
**View:** `pages/news/reports.ejs`
```javascript
{
  title: 'Báo cáo',
  reports: [{ id, title, year, quarter, date, fileUrl, summary, downloads }]
}
```

### News - Stories `/news/stories`
**View:** `pages/news/stories.ejs`
```javascript
{
  title: 'Câu chuyện tác động',
  stories: [{ id, title, excerpt, image, date, author, category, readTime }]
}
```

### News - Documents `/news/documents`
**View:** `pages/news/documents.ejs`
```javascript
{
  title: 'Tài liệu tham khảo',
  documents: [{ id, title, description, fileUrl, uploadDate, size, type }]
}
```

### Donate `/donate`
**View:** `pages/donate.ejs`
```javascript
{
  title: 'Đóng góp ngay',
  donationMethods: [{ id, name, description, icon }],
  suggestedAmounts: [50000, 100000, 200000, 500000, 1000000],
  donationPrograms: [{ id, name, description }]
}
```

**POST** `/donate`
```javascript
// Body: { fullName, email, phone, amount, method, program, message }
// Response: { success, message, data: { transactionId, amount, method } }
```

---

## 🔧 CONFIG OBJECT

```javascript
config = {
  appName: 'Quỹ Bông Hồng Nhỏ - LR Foundation',
  appDescription: '...',
  contactEmail: 'contact@lrfoundation.org',
  contactPhone: '(+84) 123 456 789',
  address: 'Hà Nội, Việt Nam',
  socialMedia: {
    facebook: 'https://facebook.com/lrfoundation',
    instagram: 'https://instagram.com/lrfoundation',
    youtube: 'https://youtube.com/@lrfoundation'
  }
}
```

---

## 🛠️ UTILS HELPERS

### Format Utils
```javascript
// Trong EJS import: <% const { formatCurrency, formatDate, formatPhone, truncate, slugify, timeAgo } = require('../utils/format.util'); %>

formatCurrency(500000)           // → '500.000 VNĐ'
formatDate(date, 'DD/MM/YYYY')   // → '30/12/2025'
formatDate(date, 'long')         // → '30 Tháng 12, 2025'
formatPhone('0987654321')        // → '0987 654 321'
truncate(text, 150)              // → 'text...'
slugify('Học bổng')              // → 'hoc-bong'
timeAgo(date)                    // → '2 giờ trước'
```

### Validation Utils
```javascript
// Trong controller/service
const { isValidEmail, isValidPhone, isValidURL, validateForm } = require('../utils/validation.util');

isValidEmail('test@example.com')  // → true/false
isValidPhone('0987654321')        // → true/false
validateForm(data, {
  email: { required: true, email: true },
  amount: { required: true, min: 10000 }
})  // → { isValid, errors }
```

---

## 📝 EJS TEMPLATE STRUCTURE

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<%= config.appDescription %>">
  <title><%= title %> - <%= config.appName %></title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <%- include('../partials/header') %>
  
  <main>
    <!-- YOUR CONTENT -->
  </main>
  
  <%- include('../partials/footer') %>
  <script src="/js/main.js"></script>
</body>
</html>
```

---

## 🎨 COMMON EJS PATTERNS

```ejs
<!-- Variables -->
<%= variable %>              <!-- Escaped -->
<%- variable %>              <!-- Unescaped HTML -->

<!-- Loop -->
<% items.forEach(item => { %>
  <div><%= item.title %></div>
<% }); %>

<!-- Conditional -->
<% if (condition) { %>
  <div>Content</div>
<% } else { %>
  <div>Other</div>
<% } %>

<!-- Include -->
<%- include('path/to/partial') %>
<%- include('path/to/partial', { data: value }) %>
```

---

## 📂 STATIC ASSETS

```
/css/styles.css          → Main CSS
/css/custom.css          → Custom CSS
/js/main.js              → Main JS
/images/                 → Images
/fonts/                  → Fonts
```

---

## ✅ CHECKLIST

- [ ] Thay placeholder trong 16 views
- [ ] Sử dụng data từ controllers
- [ ] Test tất cả routes
- [ ] Responsive design (Tailwind)
- [ ] Form validation (donate)
- [ ] SEO meta tags
- [ ] Social media links
- [ ] Image optimization
- [ ] Error handling UI

**Server:** http://localhost:3000
**Status:** ✅ Backend sẵn sàng
