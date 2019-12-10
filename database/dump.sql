-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: spontaneously
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activities` (
  `activityId` int(11) NOT NULL AUTO_INCREMENT,
  `activity` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `points` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`activityId`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,'Aquarium','Irvine',35,'aquarium.jpg',5,'Get a close encounter more than 500 marine species, from predatory reef sharks and delicate sea horses to playful penguins and otters. Touch pools, sensory exhibits, and real marine biologists help visitors of all ages connect with life inside the world’s largest ocean.','2019-12-30 10:00:00'),(2,'Arcade','Irvine',25,'arcade.jfif',15,'Join others in playing a collection of coin operated video games!								','2019-12-28 17:00:00'),(6,'Museum','Irvine',20,'museum.jpg',6,'Take some time out of your day and visit the local museum to view arts or historical artifacts with your friends.								','2019-12-28 10:00:00'),(11,'VR Arcade','Irvine',20,'vrarcade.jfif',10,'New technology that allows you to get lost in another world. Go to the local VR Arcade to see be part of a different life.								','2019-12-12 18:00:00'),(20,'Kickball','Irvine',0,'kickball.jpg',30,'A combination of baseball and soccer. Join a team for a fun time at kicking balls and running to a base.								','2019-12-10 14:00:00'),(21,'Laser Tag','Irvine',18,'lasertag.jpg',29,'Do you want to try to be stealthy? Try laser tag with other members and take them out!						','2019-12-23 16:00:00'),(25,'Camping','Irvine',0,'camping.jpg',45,'Enjoy the wildlife overnight inside a tent. Join in groups to plan a camping trip.								','2019-12-08 12:00:00'),(33,'Botanical Gardens','Irvine',15,'botanicalgarden.jpg',9,'Visit a premier botanical garden and outstanding research library with collections related to the history of the Pacific Southwest.','2020-01-23 10:00:00'),(34,'Brewery Tour','Irvine',70,'brewery.jpg',14,'Join a group to visit a nearby brewery and enjoy some beer and food!								','2019-12-29 16:00:00'),(35,'Community Service','Irvine',0,'communityservice.jpg',8,'Join others in a volunteer program to clean up the streets or help out at a local shelter for the homeless or an animal shelter!								','2019-12-02 10:00:00'),(37,'Observatory','Irvine',10,'observatory.jpg',5,'The perfect time to see stars are at night. Head over to the local observatory to learn about astronomy.								','2019-12-07 20:00:00'),(38,'Picnic','Irvine',25,'picnic.jpg',5,'Don\'t stay inside on a nice day. Join other Spontaneous.ly members at the local park for a nice picnic with food and a nice scenery.								','2019-12-08 14:00:00'),(39,'Smash bros competition','Irvine',0,'smashbros.jfif',6,'Love to compete? But also love video games? Join a small Super Smash Brothers competition with other Spontaneous.ly members!								','2019-12-14 14:00:00'),(40,'Sports Bar','Irvine',0,'sportsbar.jpg',13,'Drink, food, and sports. Meet up with other members for a night at the bar for a sport game, food, and drinks.								','2019-12-13 18:00:00'),(42,'Wine and Paint','Irvine',35,'wineandpaint.png',9,'Express your artistic side with a cup of wine. Join other Spontaneous.ly members at night for wine and painting.								','2019-12-04 19:00:00'),(43,'Zoo','Irvine',30,'zoo.jfif',5,'Take a day to join others in viewing wild and exotic animals in their habitats.								','2019-12-14 09:00:00'),(44,'Baseball','Irvine',0,'baseball.jpg',20,'Join eight other Spontaneous.ly members in a game of baseball at the local park and play against other teams.								','2019-12-29 15:00:00'),(45,'Bowling','Irvine',20,'bowling.jpg',25,'Love bowling but have nobody to go with? Find a member to join in the fun at the local bowling alley.								','2020-01-04 18:00:00'),(46,'FootGolf','Irvine',13,'footgolf.jpg',28,'A combination of golf and soccer. Kick the ball into the hole with a team!								','2019-12-28 15:00:00'),(47,'Golfing','Irvine',45,'golfing.jfif',17,'Join in others to play a game of golf and relax.								','2019-12-26 12:00:00'),(48,'Hiking','Hiking	Irvine',0,'hiking.webp',29,'Looking for a sport that also gives you a nice view? Join a group in hiking trails nearby!								','2019-12-07 09:00:00'),(49,'Indoor Swimming','Irvine',0,'indoorswimming.jpg',28,'It\'s never too cold to swim. Go to a local indoor swimming pool and join other members in swimming games or competition.								','2019-12-09 08:00:00'),(52,'Outdoor Basketball','Irvine',0,'basketball.jfif',25,'Join a team of five to play basketball on the outdoor courts at the local park.								','2019-12-03 13:00:00'),(53,'Trampoline Park','Irvine',25,'trampolinepark.jpg',17,'Roomy recreation spot for all ages filled with large trampolines plus a foam pit.								','2019-12-20 13:00:00'),(54,'Yoga','Irvine',20,'yoga.jpg',16,'Need to time to relax and breathe? Stretch out your muscles while doing yoga with a group.								','2019-12-02 07:00:00'),(56,'Cook Off','Irvine',50,'cookoff.jfif',33,'Want to share your favorite dish? Bring it to local cook off and show it off and win some prizes!								','2019-12-20 18:00:00'),(57,'Go Carting','Irvine',25,'gokart.jpg',39,'A type of open-wheel car. Go-karts come in all shapes and forms, from motorless models to high-powered racing machines. Some, such as Superkarts, are able to beat racing cars or motorcycles on long circuits','2019-12-15 11:00:00'),(58,'Horse Back Riding','Irvine',80,'horseback.jpg',42,'Learn how to ride on a horse. Or if you know how to ride a horse, go on a nice walk with a horse on a nearby trail.								','2019-12-17 09:00:00'),(59,'Ice Skating','Irvine',50,'iceskating.jpg',40,'Glide your way through an ice rink to music and join other members.								','2019-12-28 20:00:00'),(60,'Karaoke','Irvine',0,'karaoke.jpg',43,'Sing your heart out a karaoke bar with other members.								','2019-12-31 19:00:00'),(61,'Kayaking','Irvine',50,'kayaking.jpg',44,'Travel on top of water on a kayak with other members for a nice day at the nearby lake.								','2019-12-06 13:00:00'),(62,'Paddleboarding','Irvine',40,'paddleboarding.jpg',44,'Stand on a board and your paddle your way through the calm water at the nearby lake.								','2019-12-10 11:00:00'),(63,'Speed Dating','Irvine',60,'speeddating.jpg',45,'Try to get to know the other party in a short amount of time and decide if you want to continue on later on.								','2019-12-10 19:30:00'),(64,'Watch LARP','Irvine',100,'larp.jpg',32,'Sit on the lawn of the local college and watch the LARP club act out a scene.								','2019-12-02 14:00:00'),(65,'Concert','Irvine',120,'concert.jpg',46,'Enjoy the breathtaking beat of live music as you experience music in its purest form!','2019-12-02 19:00:00'),(71,'CrossFit','Irvine',20,'crossfit.jfif',60,'Take a step in the right direction for your body! Crossfit is is a lifestyle characterized by safe, effective exercise and sound nutrition.','2020-01-09 07:30:00'),(72,'Dance Club','Irvine',40,'dancing.jpg',58,'Learn how to dance! Or show off your dance moves at the local dance club with other members','2019-12-14 20:00:00'),(73,'Falconry','Irvine',70,'falconry.jpg',60,'Learn how to call a falcon or send a falcon off to hunt.','2020-01-11 10:30:00'),(74,'HIIT ','Irvine',20,'hiit.jfif',60,'Go get that summer bod! Feel energized and refreshed with this high intensity workout.','2019-12-08 07:30:00'),(75,'Rafting','Irvine',40,'rafting.jpg',60,'Get on a inflatable raft with other members and work together to get through the rapids.','2019-12-06 10:00:00'),(76,'Shooting Range','Irvine',25,'shootingrange.jpg',55,'Get ready for an intense and focus-driven sport! Practice your attention to detail and ability to remain collected under high-stress environments.','2019-12-08 16:00:00'),(77,'Spartan Race','Irvine',150,'spartanrace.jpg',59,'Join in an intense obstacle race with a team and go through different distances and difficulty from 3 miles to marathon distances.','2019-12-06 08:00:00'),(78,'Surfing','Irvine',0,'surfing.jpg',60,'Love the beach, and being in the water? Challenge yourself to an activity that brings physical intensity and the flow of the ocean together.','2019-12-10 08:30:00'),(79,'Triathlon','Irvine',180,'triathlon.jpg',60,'Go through three different continuous and sequential races with a team made up of Spontaneous.ly members.','2019-12-02 07:00:00'),(80,'Bridge Climbing','Irvine',220,'bridgeclimbing.jpg',75,'Challenge yourself to an intense, focus-driven climb! Not for the faint of heart or those with a fear of heights, bridge climbing is an exhilerating adventure for the bold!','2019-12-06 11:30:00'),(82,'Dirt Bike Racing','Irvine',220,'dirtbikeracing.jpg',69,'Get down and dirty with high speeds and a rugged track! Feel the wind in your face and leave your competition in the dust!','2019-12-09 10:30:00'),(83,'Exotic Car Driving','Irvine',300,'exoticcardriving.png',62,'Always wanted to try driving an exotic car or a race car? Rent one and drive around the course for the experience.','2019-11-30 13:00:00'),(84,'Hot Air Balloon','Irvine',300,'hotairballoon.jpg',65,'Try this peaceful yet exhilerating experience of a lifetime! What you kept seeing in movies and on TV, you can finally say you\'ve done yourself!','2019-11-30 13:00:00'),(85,'Ziplining','Irvine',130,'ziplining.jpg',66,'Tackle dangling obstacles, explore the trees from a new perspective and fly around on multiple zip lines from exciting heights.','2019-12-08 12:30:00'),(86,'Snorkle With Sharks','Irvine',300,'snorklewithsharks.jpg',74,'Go snorkling and see sharks in its own habitat.','2019-12-02 10:00:00'),(87,'Skydiving','Irvine',160,'skydiving.jpg',70,'Go 12,500 feet about ground and jump off a plane for a skydiving experience.','2019-11-29 11:00:00'),(88,'Rock Climbing','Irvine',350,'rockclimbing.jpg',72,'Ever wanted to scale a mountain? Try rock climbing! Regardless if you\'re new or a pro, join in the fun and scale the very steep wall of rocks.','2019-11-29 08:00:00'),(89,'Offroading','Irvine',240,'offroading.jpg',73,'Take a different route. Go off road and feel the bumpiness of the nature as you drive around.','2019-12-31 12:00:00');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friendRequests`
--

DROP TABLE IF EXISTS `friendRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `friendRequests` (
  `senderId` int(11) NOT NULL,
  `recipientId` int(11) NOT NULL,
  `isAccepted` tinyint(1) NOT NULL,
  `isPending` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friendRequests`
--

LOCK TABLES `friendRequests` WRITE;
/*!40000 ALTER TABLE `friendRequests` DISABLE KEYS */;
INSERT INTO `friendRequests` VALUES (1,2,1,0),(2,1,1,0),(72,4,1,0),(4,72,1,0),(76,77,1,0),(77,76,1,0),(76,77,0,1),(77,76,0,0);
/*!40000 ALTER TABLE `friendRequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `messageId` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senderId` int(11) NOT NULL,
  `recipientId` int(11) NOT NULL,
  `sentAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`messageId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (18,'Hey gurl',2,4,'2019-12-02 01:52:10'),(19,'Sup',2,4,'2019-12-02 01:52:20'),(20,'Yo yo',4,2,'2019-12-02 02:02:08'),(21,'How\'s it popping',4,2,'2019-12-02 02:02:08'),(22,'Poppin like a race horse',2,4,'2019-12-02 04:50:40'),(23,'Hey dog',1,3,'2019-12-02 05:18:54'),(24,'What\'s the cookie bro',3,1,'2019-12-02 05:18:54'),(25,'The cookie is the lunch',1,3,'2019-12-02 05:20:08'),(26,'Eyyy',2,4,'2019-12-02 17:42:58'),(27,'What up',2,4,'2019-12-02 17:43:12'),(28,'Hey',2,4,'2019-12-02 17:46:09'),(29,'HeyAnswer me',2,4,'2019-12-02 17:46:13'),(30,'HeyAnswer me now',2,4,'2019-12-02 17:46:16'),(31,'HeyAnswer me nownow',2,4,'2019-12-02 17:46:18'),(32,'What up',1,3,'2019-12-04 03:00:32');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `points`
--

DROP TABLE IF EXISTS `points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `points` (
  `userId` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `transactionType` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `points`
--

LOCK TABLES `points` WRITE;
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
INSERT INTO `points` VALUES (1,15,'reservation'),(1,15,'reservation'),(1,15,'reservation'),(1,-50,'cancellation'),(1,-50,'cancellation'),(1,-50,'cancellation'),(1,-50,'cancellation'),(1,-25,'re-roll'),(1,-25,'re-roll'),(1,-25,'re-roll'),(68,44,'reservation'),(68,40,'reservation'),(68,39,'reservation'),(68,42,'reservation'),(68,39,'reservation'),(68,45,'reservation'),(68,43,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(2,40,'reservation'),(3,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(1,40,'reservation'),(69,44,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(4,40,'reservation'),(1,40,'reservation'),(2,40,'reservation'),(2,40,'reservation'),(2,40,'reservation'),(2,40,'reservation'),(2,40,'reservation'),(2,40,'reservation'),(2,-25,'reroll'),(4,-25,'reroll');
/*!40000 ALTER TABLE `points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservations` (
  `userId` int(11) NOT NULL,
  `activityId` int(11) NOT NULL,
  `isCancelled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (4,89,0),(4,53,0),(4,39,0),(4,43,0),(4,11,0),(4,88,0),(4,87,0),(4,45,0),(4,47,0),(1,39,0),(2,39,0),(4,40,0);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Laurence','Baldwin','lbaldwin@learningfuze.com','$2y$10$7.g.wDpXNeHP9uC5bMt.Ku.gAPgnhMJeSQXJIyf0lAfltZwHxlkTK','laurence.png'),(2,'Bernadette','Garza','bgarza@learningfuze.com','$2y$10$sTKIAf7JwVOpNlFfOY8EqOu7Ly5NEfRk4iOM6oPQ1Vpir6n6xPtLa','bernadette.png'),(3,'Enrique','Ramos','eramos@learningfuze.com','$2y$10$N/IfXKrBYylBIohhJpRAV.DEllWHV7cksrzDbO.YLdyh2S2YxJ2ka','enrique.png'),(4,'Laverne','Pratt','lpratt@learningfuze.com','$2y$10$EnQbA6cL9PUX0oFmFjRMveVLlYZtdnDdPDWd3NwpDb3z58QNG.iQ.','laverne.png'),(70,'joe','joe','joe@joe.com','$2y$10$d5JCBWoW0RtaO6t9B68Lh.KbHEu9XRA3mAEt13aIcaMYm8XncDnTW','joe.jpg'),(71,'Lily','Potter','lpotter@lfz.com','$2y$10$N2BvOcA4WWv3M2kt/CiMVO7QNM9QxsBbyXweUWScCbDwHn4jdrVfq','op_432.png'),(72,'Jameson','Hill','jhill@lfz.com','$2y$10$QW0u0s6RKkRpnRsfEkCy6uCFdvwilkiaAKIK/Gq/hMH/Z.a6naHpq','skynews-sam-smith-singer_4612788.jpg'),(73,'Huey','Duck','hduck@lfz.com','$2y$10$Mm/iKMu0S0SI6ssy4bQadOEGd9iAcqIU.gyro6hjpo.CEOpDjw62a','Huey_Ducktales.png'),(74,'Dewey','Duck','dduck@lfz.com','$2y$10$n4qHLA0GF12TlTeLHWeYyOhRFtanQYQ034ggJocX6E9zW9QDX5wVW','Dewey_Ducktales.png'),(75,'Louie','Duck','lduck@lfz.com','$2y$10$zDKufrc9PG8v0ZzADLQ.I.xVRAYLpGkkFH2WEyT5OUZNiAAfBCyvG','Louie_Duck.png'),(76,'Billy Bob','Thorton','bthorton@learningfuze.com','$2y$10$hezJ.cb35O9bwi2WO/elsuwyYxOp0ajR7CtsLtKmwJPzTU7kHiMXy','2018-10-11-billy-bob-thornton.jpg'),(77,'Emma','Thorn','emma@lfz.com','$2y$10$rnlDIVKmWBGLMGDou7YzA.A9tnOadf0S9z4YEwh83xj5yNFQLQK0u','Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_(cropped).jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10 20:25:34
