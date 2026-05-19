-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4306
-- Generation Time: Nov 18, 2024 at 02:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fooddelivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_by_user`
--

CREATE TABLE `order_by_user` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `contact_no` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Ordered_items` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_by_user`
--

INSERT INTO `order_by_user` (`id`, `name`, `contact_no`, `email`, `Ordered_items`, `address`) VALUES
(1, 'John Doe', '1234567890', 'johndoe@example.com', 'Laptop, Mouse', '1234 Elm Street, Springfield, IL'),
(2, 'Anurag', '7488843862', 'anu@gmail.com', 'Vada paw', 'araria'),
(3, 'Anurag', '9631584507', 'anurag@gmail.com', 'Vada paw', 'Law gate arriaa'),
(4, 'ankit', '911084746', 'ankit123@gmail.com', 'Vada paw', 'lawgate');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', 'johndoe@example.com', 'hashed_password123', '2024-11-17 10:14:35', '2024-11-17 10:14:35'),
(2, 'Anurag', 'aws.anu.co@gmail.com', '1234567', '2024-11-17 13:07:00', '2024-11-17 13:34:55'),
(9, 'Anurag', 'aws.anh.co@gmail.com', '123456', '2024-11-17 13:32:30', '2024-11-17 13:32:30'),
(10, 'Ankit', 'ankit@gmail.com', '123456', '2024-11-17 17:52:30', '2024-11-17 17:52:30'),
(11, 'Saurav', 'anurag@gmail.com', '12345677', '2024-11-18 11:10:04', '2024-11-18 11:10:04'),
(12, 'ankit', 'ankit123@gmail.com', 'ankit123', '2024-11-18 12:53:03', '2024-11-18 12:53:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order_by_user`
--
ALTER TABLE `order_by_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_by_user`
--
ALTER TABLE `order_by_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
