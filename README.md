# Components Flow
  - Head
  - Body
  - Sidebar
     - Menu Items
  - Main Container
     - Buttons List
     - Video Container
     - VideoCard


# Debouncing:

typing slow = 200ms
typing fast = 30ms

# Performance:
  - iphone pro max = 14 letter * 1000 users = 14000 API Call
  - with debouncing = 3 API Calls * 1000 = 3000


# Debouncing with 200ms
   - if Difference between 2 key stroke is < 200 ms - DECLINE API Call
   - >200ms make an API Call


# Cache:
time complexity to search in array = O(n)
time complexity to search in Obj = O(1) --> far better than O(n)

new Map();  --> Searching inside object this new Map() even more optimize

# [i,ip,iphone]

{
   i:
   ip:
   iph:
}