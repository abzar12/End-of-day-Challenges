<?php
try {
    $conn = new PDO("mysql:host=localhost; dbname=ContactForm", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //$sql = $conn->prepare(" CREATE TABLE IF NOT EXISTS CUSTOMERS (ID INT AUTO_INCREMENT, Full_Name varchar(35), Email varchar(35) UNIQUE, Business_Name varchar(35), Phone varchar(35), Website_Description varchar(250), Website_Link varchar(35), System_Contact varchar(35), Website_Type varchar(35), Domain_Name varchar(35), Hosting_Name varchar(35), User_Website varchar(35), Website_Pages varchar(35), Work_Interval varchar(35), Budged varchar(35), Constraint PK_Customer Primary Key(ID))");
    //$sql->execute();

    //if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST["send"])) {
    // try {
    $FullName = $_POST['fullname'];
    $Email = $_POST['email'];
    $BusinessName = $_POST['business'];
    $Phone = $_POST['phone'];
    $WebsiteDesc = $_POST['DescritionWebsite'];
    $WebsiteLink = $_POST['Websitelink'];
    $ContactWay = $_POST['contact'] ?? null;
    $WebsiteType_ = $_POST['typeOfBusiness'] ?? []; // this is an array
    $DomainName = $_POST['domain'] ?? null;
    $HostingName = $_POST['hosting'] ?? null;
    $userWebsite = $_POST['content'] ?? null;
    $WebsitePages = $_POST['page'] ?? null;
    // third step of html
    $WorkInterval = $_POST['WorkTime'] ?? null;
    $Budged = $_POST['websitePrice'] ?? null;
    $WebsiteType_Str = implode(',', $WebsiteType_);

    if (!$FullName || !$Email || !$BusinessName || !$Phone || !$WebsiteDesc || !$WebsiteLink || !$ContactWay || empty($WebsiteType_) || !$DomainName || !$HostingName || !$userWebsite || !$WebsitePages || !$WorkInterval || !$Budged) {
        echo "<script>alert ('ERROR D'EXECUSION');</script>";
        exit;
    } else {
        try {
            $stmt = $conn->prepare("INSERT INTO CUSTOMERS ( Full_Name, Email, Business_Name, Phone, Website_Description, Website_Link, System_Contact, Website_Type, Domain_Name, Hosting_Name, User_Website, Website_Pages, Work_Interval, Budged) 
                VALUES (:FullName, :Email, :BusinessName, :Phone, :WebsiteDesc, :WebsiteLink, :ContactWay, :WebsiteType, :DomainName, :HostingName, :userWebsite, :WebsitePages, :WorkInterval, :Budged)");
            $stmt->execute([
                ':FullName'     => $FullName,
                ':Email'        => $Email,
                ':BusinessName' => $BusinessName,
                ':Phone'        => $Phone,
                ':WebsiteDesc'  => $WebsiteDesc,
                ':WebsiteLink'  => $WebsiteLink,
                ':ContactWay'   => $ContactWay,
                ':WebsiteType'  => $WebsiteType_Str,
                ':DomainName'   => $DomainName,
                ':HostingName'  => $HostingName,
                ':userWebsite'  => $userWebsite,
                ':WebsitePages' => $WebsitePages,
                ':WorkInterval' => $WorkInterval,
                ':Budged'       => $Budged
            ]);
        } catch (PDOException $th) {
            echo "Error : " . $th->getMessage();
        }

        header("Location: ./public/index.html");
    }
} catch (PDOException $n) {
    echo "❌ Error saving data: " . $n->getMessage();
}
