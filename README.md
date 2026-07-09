
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>بازی ریاضی کلاس اول</title>

<script src="https://cdn.tailwindcss.com"></script>

<style>
body{
margin:0;
font-family:tahoma;
background:#f0fdf4;
}

header{
background:#22c55e;
color:white;
padding:20px;
text-align:center;
font-size:28px;
font-weight:bold;
}

.container{
max-width:900px;
margin:auto;
padding:20px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:20px;
}

.card{
background:white;
padding:25px;
border-radius:20px;
text-align:center;
cursor:pointer;
box-shadow:0 5px 15px rgba(0,0,0,.15);
transition:.3s;
}

.card:hover{
transform:scale(1.05);
background:#dcfce7;
}

.icon{
font-size:70px;
}

.title{
font-size:20px;
font-weight:bold;
margin-top:15px;
}
</style>

</head>

<body>

<header>

🎮 بازی های ریاضی کلاس اول

</header>

<div class="container">

<div class="grid">

<div class="card">
<div class="icon">✋</div>
<div class="title">تشخیص عدد با انگشتان</div>
</div>

<div class="card">
<div class="icon">🔢</div>
<div class="title">بشمار و بگو</div>
</div>

<div class="card">
<div class="icon">🎨</div>
<div class="title">رنگ کن</div>
</div>

<div class="card">
<div class="icon">🧩</div>
<div class="title">الگوها</div>
</div>

<div class="card">
<div class="icon">🔗</div>
<div class="title">وصل کن</div>
</div>

<div class="card">
<div class="icon">🏆</div>
<div class="title">آزمون فصل</div>
</div>

</div>

</div>

</body>
</html>
