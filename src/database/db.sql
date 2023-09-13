CREATE SCHEMA `users`;

CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL,
  `whatsapp` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rfid` varchar(30) NOT NULL,
  `role` ENUM ('Admin', 'Internship', 'Staff') NOT NULL,
  `division_id` integer NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `schedules` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_date` date NOT NULL,
  `end_time` time NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `attendances` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `schedule_id` integer NOT NULL,
  `user_id` integer NOT NULL,
  `tapping_date` date,
  `tapping_time` time,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `divisions` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(50),
  `description` text,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `tokens` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` integer NOT NULL,
  `token` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);
