---
sidebar_position: 1
---

# NEC UNIVERGE IX
BGP4+に未対応のため、IPv6のルーティングはできません。IPv6を利用したい場合は、Static Routingを利用してください。
## デフォルトルート
### GREトンネル
```
! NEC Portable Internetwork Core Operating System Software
! IX Series IX2215 (magellan-sec) Software, Version 10.7.18, RELEASE SOFTWARE
! Compiled Oct 25-Tue-2022 12:37:13 JST #2
! Current time Jan 01-Wed-2014 10:14:38 JST
!
timezone +09 00
!
!
ip ufs-cache enable
ip route <割り当てIPv4アドレス> Null0.0
ip dhcp enable
ip prefix-list pref-in 10 permit 0.0.0.0/0
ip prefix-list pref-in 20 deny any
ip prefix-list pref-out 10 permit <割り当てIPv4アドレス>
ip prefix-list pref-out 20 deny any
ip access-list proxy-dns permit ip src <割り当てIPv4アドレス> dest any
ip access-list proxy-dns deny ip src any dest any
!
!
ipv6 ufs-cache enable
!
!
!
!
!
!       
!
!
!
proxy-dns ip enable
proxy-dns ip access-list proxy-dns
proxy-dns server <任意のDNSサーバアドレス>
!
!
!
!
ip dhcp profile server1
  assignable-range <最小割り当てアドレス> <最大割り当てアドレス>
  default-gateway <自身のルータのアドレス>
  dns-server <自身のルータのアドレス>
!
router bgp <AS番号>
  neighbor <HomeNOC側境界アドレス> remote-as 59105
  address-family ipv4 unicast
    neighbor <HomeNOC側境界アドレス> distribute-list pref-in in
    neighbor <HomeNOC側境界アドレス> distribute-list pref-out out
    network <割り当てIPv4アドレス>
!
device GigaEthernet0
!
device GigaEthernet1
!
device GigaEthernet2
!
device BRI0
  isdn switch-type hsd128k
!
device USB0
  shutdown
!
interface GigaEthernet0.0
  no ip address
  ipv6 enable
  ipv6 interface-identifier xx:xx:xx:xx:xx:xx:xx:xx
  ipv6 address autoconfig receive-default
  ipv6 traffic-class tos 0
  no shutdown
!
interface GigaEthernet1.0
  no ip address
  shutdown
!
interface GigaEthernet2.0
  ip address <自身のルータのアドレス>/29
  ip dhcp binding server1
  no shutdown
!
interface BRI0.0
  encapsulation ppp
  no auto-connect
  no ip address
  shutdown
!
interface USB-Serial0.0
  encapsulation ppp
  no auto-connect
  no ip address
  shutdown
!
interface Loopback0.0
  no ip address
!
interface Null0.0
  no ip address
!
interface Tunnel0.0
  tunnel mode gre ipv6
  tunnel destination <トンネル終端アドレス（HomeNOC側）>
  ip address <貴団体側トンネル境界アドレス>/31
! 以下のMSS値は、MTUが1500の場合の値です。MTUが異なる場合は適宜調整してください。
  ip tcp adjust-mss 1416
  no shutdown
!
```

## フルルート
機器の性能上、フルルートを受信することはできません。