-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2020 at 01:03 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodeapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `status` enum('true','false','onGoing') NOT NULL DEFAULT 'false',
  `description` text,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `finishedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `role` enum('user','admin','guest') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `userName`, `password`, `email`, `fName`, `lName`, `role`) VALUES
(1, 'susan', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu9ITM2PAM45a.JmwtGvT290NhaSBW2gS', 'susan8@gmail.com', 'susan', 'duwal', 'user'),
(2, 'Yamanai', 'Yamanai123', 'yatai@gmail.com', 'Yamanai', 'Tai', 'user'),
(5, 'sagar', 'sagar123', 'haha@gmail.com', 'Sagar', 'Shrestha', 'user'),
(8, 'hello', 'hello123', 'hel@gmail.com', 'hello', 'hi', 'user'),
(9, 'susan', 'susan123', 'susan@gmail.com', 'susan', 'duwal', 'user'),
(11, 'sujan', 'susan123', 'Samir@gmail.com', 'Latoman', 'Bokataro', 'user'),
(29, 'yamaBhudha', 'yahaBhudha', 'laure@gmail.com', 'Yama', 'Bhudha', 'user'),
(31, 'yamaBhudha', 'yahaBhudha', 'laureFan@gmail.com', 'Yama', 'Bhudha', 'user'),
(37, 'amit', 'amit123', 'amit@gmail.com', 'Amit', 'Chongmang', 'user'),
(88, 'Roshan', 'roshan123', 'Roshan@gmail.com', 'Roshan', 'Shrestha', 'user'),
(89, 'Roshan', 'roshan123', 'bijen@gmail.com', 'Roshan', 'Shrestha', 'user'),
(98, 'Blank', '$2a$10$E5YNdzhXLte3zKgMeT8FgupA7EBZqrv63Iu/ZxG2lIATZOiu39BoS', 'anon@no.co', 'Punya', 'Duwal', 'admin'),
(99, 'sdfdsf', '$2a$10$E5YNdzhXLte3zKgMeT8FguBwnjvHI35vKfpfOE1Hln.mOQBBjTcZ2', 'sdjf@fjdks.sdf', 'sdf@fjkds.sdf', 'sdkfjds', 'user'),
(101, 'KICNNE4D17', '$2a$10$E5YNdzhXLte3zKgMeT8FguOoQbho8x.71cuDCTKzG4Ft.dfOcuWQu', 'qe0qo@wm0x.sdf', 'df', 'dd', 'user'),
(102, 'wykihu', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'kusagelabir@mailinator.com', 'Shoshana', 'Sexton', 'user'),
(103, 'viliqak', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'nibajuvagaz@mailinator.com', 'Kyle', 'Strickland', 'user'),
(104, 'dycagyke', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'byjutusesy@mailinator.com', 'Nathan', 'Serrano', 'user'),
(105, 'domamiwyfi', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'gilasy@mailinator.net', 'Hunter', 'Short', 'user'),
(106, 'pohyfo', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'koqu@mailinator.net', 'Talon', 'Goodwin', 'user'),
(107, 'qyxysy', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'quvoxi@mailinator.com', 'Shellie', 'Clarke', 'user'),
(108, 'xadoxavely', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'kiromuqo@mailinator.com', 'Brendan', 'Lott', 'user'),
(116, 'vevezudynu', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'huxubufa@mailinator.com', 'Vivian', 'Sosa', 'user'),
(118, 'qypacure', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'qotek@mailinator.net', 'Hashim', 'Rowe', 'user'),
(119, 'serabyrulu', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'mugak@mailinator.net', 'Kendall', 'Hunt', 'user'),
(120, 'asdf', '$2a$10$E5YNdzhXLte3zKgMeT8FgucuTdKgOzLTw4JycPu2q.FXeadGHJy9S', 'sdf@ds.co', 'ss', 'ssu', 'user'),
(121, 'sozihiqy', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'rufezob@mailinator.com', 'Tamekah', 'Richardson', 'user'),
(122, 'begyju', '$2a$10$E5YNdzhXLte3zKgMeT8Fgu7YbJGP7nSawU/RYlpKw3/5sf82WMs7K', 'jiqy@mailinator.com', 'James', 'Good', 'user'),
(123, 'rojit8', '$2a$10$E5YNdzhXLte3zKgMeT8Fgub18Q.LMj22yPSdb3ShyW0owJZ4DuMR2', 'rojit@yahoo.com', 'Rojit', 'Khayargoli', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
