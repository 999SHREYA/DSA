| Problem          | Pattern                |
| ---------------- | ---------------------- |
| Palindrome       | i & j move inward      |
| Valid Palindrome | skip + compare         |
| Two Sum II       | sum control (i++, j--) |


Two pointers work only when we have a monotonic structure (like sorted array), because pointer movement guarantees predictable change in result.


1. Opposite Direction Two Pointers

Used in:

Two Sum II
Palindrome
Reverse problems

👉 Idea: shrink space from both ends

2. Conditional Movement Pattern

Rule:

if condition too small → move right
if condition too big → move left

👉 Idea: optimize search