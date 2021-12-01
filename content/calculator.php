<title>Calculator</title>
<link rel="stylesheet" href="calcstyle.css" type="text/css">
</head>
<body>
<h1>Time calculator</h1>
<br>
<img src="images/time.gif" alt="picture" id="picture">
<div id="online">
    <br><br>
    This calculator will allow you to convert time measurements from one unit to another.
    At the same time, in just a few seconds you can translate into hours, hours into seconds,
    minutes into seconds or days into hours, which temporary operations you do not need,
    all this will be done easily and easily using this calculator.
    <br>
    <br>
    After seconds became international time units and a generally accepted starting point,
    it was noted that the duration of a solar day during the year deviates from the average by a fraction of a second.
    Therefore, the Julian day was introduced, equal to 86 400 s exactly, and, accordingly,
    the Julian year, also called the scientific year.
    The accumulated "extra seconds" form every 4 years an additional day in the Gregorian year - February 29.
    <br><br>
</div>
<form name="time1" id="times" onclick="return validateForm()" method="post">
    <label for="all">Write right here</label>
    <input type="number" name="all" id="all"> second/seconds
    <!--<input type="number" name="all" id="all"> milisecond-->
    <br>
    <fieldset>
        <legend>Vali valuuta:</legend> <!--рамка-->
        <input type="radio" name="choose" id="minute" value="minute" onchange="radioChange(event)">
        <label for="minute">Minute</label>
        <br>
        <input type="radio" name="choose" id="hour" value="hour" onchange="radioChange(event)">
        <label for="hour">Hour</label>
        <br>
        <input type="radio" name="choose" id="day" value="day" onchange="radioChange(event)">
        <label for="day">Day</label>
        <br>
        <br>
        <input type="radio" name="choose" id="week" value="week" onchange="radioChange(event)">
        <label for="week">Week</label>
        <br>
        <input type="radio" name="choose" id="month" value="month" onchange="radioChange(event)">
        <label for="month">Month</label>
        <br>
        <input type="radio" name="choose" id="year" value="year" onchange="radioChange(event)">
        <label for="year">Year</label>
        <br>
        <br>
        <input type="radio" name="choose" id="century" value="century" onchange="radioChange(event)">
        <label for="century">Century</label>
        <br>
    </fieldset>
    <div id="answer">Here you will see the answer.</div>
</form>
<script src="calcJava.js"></script>
<br>
<br>
<a href="https://github.com/Maksim54/Calculator"
   target="blank">Github here</a>
<br>
<br>
<footer>
    &copy;Maksim Lagunovski.
</footer>
</body>