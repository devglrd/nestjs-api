### Nest Api 


#### Running benchmark

 ```Running on a 8 cpu 32go```

- 8 threads and 1000 connections    
    - `endpoint : /api`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency    39.17ms  108.59ms   1.74s    98.02%
    - Req/Sec     4.61k   620.89     8.76k    88.20%
    - `1076366 requests in 30.06s`, 285.37MB read
    - Requests/sec:  `35807.29`
    - Transfer/sec:      9.49MB


- 8 threads and 1000 connections
   - `endpoint : /api/users`
   - Thread Stats   Avg      Stdev     Max   +/- Stdev
   - Latency   211.21ms  252.88ms   2.00s    87.10%
   - Req/Sec   324.01     78.87     1.25k    81.68%
   - `76162` requests in 30.08s, 345.33MB read
  - Requests/sec:   `2532.10`
  - Transfer/sec:     11.48MB
