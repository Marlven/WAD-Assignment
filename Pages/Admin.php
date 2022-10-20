<html>
<head>
    <title>Admin Page</title>
    <link rel="stylesheet" href="../Style/Admin.css">
    <script src="../Scripts/Admin.js"></script>
</head>
<body>
    <div class="Container">

            <nav>
                <ul>
                    <li><a href="HomePage.html">Home</a></li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Event.html">Event</a></li>
                    <li><a href="Speakers.html">Speakers</a></li>
                    <li><a href="Research.html">Research</a></li>
                    <li><a href="Contact.html">Contact Us</a></li>
                    <li><a href="Admin.html">Profile</a></li>
                </ul>
            </nav>
            
           
                <h1>Conference Chair Dashboard</h1>
                <p>Welcome Chairman to your Dashboard</p>            
                <h2>Here are the list of Researchers with papers pulblished</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Organisation</th>
                    </tr>
                </table>

                <?php
                $conn = mysqli_connect("localhost", "root". "", "company");
                if ($conn-> connect_error){
                    die("Connection failed:". $conn-> connect_error);
                }

                $sql = "SELECT Researcher_id, First_Name, Last_Name, Email, Organisation from Researcher";
                $result = $conn-> query($sql);


    </div>

</body>
</html>