# Overview

"Step through" data as tables are populated with records.

Start out by defining the source data in tables, including a special Keyframe table:

```none
Attendee                             Prize
========                             =====
| ID | Name    | Prize | Keyframe |  | ID | Attendee | Name       | Mail_addr  | Keyframe |
|----|---------|-------|----------|  |----|----------|------------|------------|----------|
| 1  | Alice   | 1     | 1        |  | 1  | 1        | Alice      | 123 Mai... | 2        |
| 2  | Bobby   | 2,3   | 1        |  | 2  | 2        | Bobby      | 456 2nd... | 2        |
| 3  | Camille | 4     | 1        |  | 3  | 2        | Cedric ... | 456 2nd... | 2        |
| 4  | Davie   | 5     | 1        |  | 4  | 3        | camille    | 987 Thi... | 2        |
| 5  | Erin    | 6,7   | 1        |  | 5  | 4        | Davie      | 555 Fou... | 3        |
                                     | 6  | 5        | Erin       | 432 Ros... | 4        |
                                     | 7  | 5        | Erin       | 432 Ros... | 5        |

Keyframe
========
| Key | Description           | Attendee  | Prize   |
|-----|-----------------------|-----------|---------|
| 1   | Add attendance        | 1,2,3,4,5 |         |
| 2   | First batch of claims |           | 1,2,3,4 |
| 3   | Davie's claim         |           | 5       |
| 4   | Erin's 1st claim      |           | 6       |
| 5   | Erin's 2nd claim      |           | 7       |
```

Prize links to an Attendee, and both link to Keyframe.  The Keyframe represents stages as data progresses:
