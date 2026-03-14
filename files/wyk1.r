library(dplyr)
library(ggplot2)
library(stringr)
tab1 <- przykład_oceny_w1 |>
  count(ocena_Xi) |>
  mutate(n_proc=n/sum(n), cum=cumsum(n),cum_proc=cum/sum(n))


## Wykres kolumnowy
przykład_oceny_w1 |>
  ggplot(aes(ocena_Xi))+
  geom_bar()

table(Rossmann$czy_otwarty)
otwarte <- Rossmann|>
  filter(czy_otwarty=="Tak")

otwarte|>
  ggplot(aes(sprzedaz))+
  geom_histogram()

otwarte|>
  count(cut(sprzedaz, c(0:40*1000)))

## Miary klasyczne dla danych surowych:
klasyczne<-function(x){
  N<-length(x)
  sr<-mean(x)
  s2<-1/N*sum((x-sr)^2)
  s<-sqrt(s2)
  Vs<-s/sr
  alfa3<-1/N*sum((x-sr)^3)/s^3
  alfa4<-1/N*sum((x-sr)^4)/s^4
  list(srednia=sr,wariancja=s2,odchylenie_standardowe=s,klas_wsp_zm=Vs,klas_wsp_asym=alfa3,kurtoza=alfa4)
}

klasyczne(przykład_oceny_w1$ocena_Xi)

## Miary klasyczne dla szeregu punktowego
tab2<-otwarte|>
  count(sprzedaz=cut(sprzedaz,c(0:20*2000),dig.lab=5))
klasyczne_punkt<-function(x,n){
  N<-sum(n)
  sr<-sum(x*n)/N
  s2<-1/N*sum((x-sr)^2*n)
  s<-sqrt(s2)
  Vs<-s/sr
  alfa3<-1/N*sum((x-sr)^3*n)/s^3
  alfa4<-1/N*sum((x-sr)^4*n)/s^4
  list(srednia=sr,wariancja=s2,odchylenie_standardowe=s,klas_wsp_zm=Vs,klas_wsp_asym=alfa3,kurtoza=alfa4)
  
}

cbind(klasyczne_punkt(tab1$ocena_Xi, tab1$n), klasyczne(przykład_oceny_w1$ocena_Xi))

str_extract_all(tab2$sprzedaz,"[0-9.]+")[[1]]