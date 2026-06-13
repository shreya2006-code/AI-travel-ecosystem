# Database Schema Design

## Databases Used

### PostgreSQL
Primary transactional database

### MongoDB
AI-generated content and unstructured data

### Redis
Caching and session management

## Core Modules

1. User Management
2. Hotel Management
3. Inventory Management
4. Booking Management
5. AI Trip Planner

## PostgreSQL Tables

### users
- id
- name
- email
- password_hash
- phone
- role
- created_at
- updated_at

### hotels
- id
- owner_id
- hotel_name
- description
- address
- city
- state
- country
- status
- created_at
- updated_at

### rooms
- id
- hotel_id
- room_type
- capacity
- price_per_night
- total_rooms
- amenities

### inventory
- id
- room_id
- date
- available_rooms
- booked_rooms

### bookings
- id
- user_id
- room_id
- check_in
- check_out
- guests
- total_amount
- status
- created_at

## Relationships

### User → Hotel
One user can own many hotels.

users.id → hotels.owner_id

### Hotel → Room
One hotel can have many rooms.

hotels.id → rooms.hotel_id

### Room → Inventory
One room type can have inventory records for many dates.

rooms.id → inventory.room_id

### User → Booking
One user can make many bookings.

users.id → bookings.user_id

### Room → Booking
One room can appear in many bookings.

rooms.id → bookings.room_id

USERS
  |
  | 1:N
  v
HOTELS
  |
  | 1:N
  v
ROOMS
  |
  | 1:N
  v
INVENTORY

USERS
  |
  | 1:N
  v
BOOKINGS
  ^
  |
  | N:1
ROOMS