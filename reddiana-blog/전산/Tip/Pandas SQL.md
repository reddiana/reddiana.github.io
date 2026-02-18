---
publish: true
tags:
date: 2025-12-19
permalink: 2025.1219.0922.10
---
아래 문서를 공부함
- [How to rewrite your SQL queries in Pandas, and more](https://link.medium.com/rqPEDzQ898) by [Irina Truong](https://medium.com/@itruong)
- pandas [Getting started](https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html#getting-started) 문서: [Comparison with SQL](https://pandas.pydata.org/pandas-docs/stable/getting_started/comparison/comparison_with_sql.html)

# Pandas import + 데이터 불러오기

```python
import pandas as pd
airports = pd.read_csv('https://ourairports.com/data/airports.csv')
airport_freq = pd.read_csv('https://ourairports.com/data/airport-frequencies.csv')
runways = pd.read_csv('https://ourairports.com/data/runways.csv')
```

```python
type(airports)
```

    pandas.core.frame.DataFrame

# Dataframe 

```python
airports.head(4)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>6523</td>
      <td>00A</td>
      <td>heliport</td>
      <td>Total Rf Heliport</td>
      <td>40.070801</td>
      <td>-74.933601</td>
      <td>11.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-PA</td>
      <td>Bensalem</td>
      <td>no</td>
      <td>00A</td>
      <td>NaN</td>
      <td>00A</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>323361</td>
      <td>00AA</td>
      <td>small_airport</td>
      <td>Aero B Ranch Airport</td>
      <td>38.704022</td>
      <td>-101.473911</td>
      <td>3435.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-KS</td>
      <td>Leoti</td>
      <td>no</td>
      <td>00AA</td>
      <td>NaN</td>
      <td>00AA</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.949200</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>6525</td>
      <td>00AL</td>
      <td>small_airport</td>
      <td>Epps Airpark</td>
      <td>34.864799</td>
      <td>-86.770302</td>
      <td>820.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AL</td>
      <td>Harvest</td>
      <td>no</td>
      <td>00AL</td>
      <td>NaN</td>
      <td>00AL</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

```python
airports.shape
```

    (57376, 18)

```python
airports.columns
```

    Index(['id', 'ident', 'type', 'name', 'latitude_deg', 'longitude_deg',
           'elevation_ft', 'continent', 'iso_country', 'iso_region',
           'municipality', 'scheduled_service', 'gps_code', 'iata_code',
           'local_code', 'home_link', 'wikipedia_link', 'keywords'],
          dtype='object')

```python
airports.describe()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>57376.000000</td>
      <td>57376.000000</td>
      <td>57376.000000</td>
      <td>49557.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>93753.354469</td>
      <td>25.571000</td>
      <td>-34.611389</td>
      <td>1253.089210</td>
    </tr>
    <tr>
      <th>std</th>
      <td>127917.359277</td>
      <td>27.282870</td>
      <td>79.909407</td>
      <td>1615.832743</td>
    </tr>
    <tr>
      <th>min</th>
      <td>2.000000</td>
      <td>-90.000000</td>
      <td>-179.876999</td>
      <td>-1266.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>14472.750000</td>
      <td>7.665290</td>
      <td>-92.046148</td>
      <td>208.000000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>28960.500000</td>
      <td>36.222551</td>
      <td>-71.458750</td>
      <td>722.000000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>45914.250000</td>
      <td>43.764555</td>
      <td>14.537073</td>
      <td>1517.000000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>335599.000000</td>
      <td>90.000000</td>
      <td>179.999894</td>
      <td>29977.000000</td>
    </tr>
  </tbody>
</table>
</div>

# Pandas에서 직접 SQL 구문 실행하기

```python
df1 = airport_freq[airport_freq.airport_ident == 'KLAX'] \
                  .sort_values('type', ascending=False)
df1
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>11962</th>
      <td>60776</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.95</td>
    </tr>
    <tr>
      <th>11961</th>
      <td>60775</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>119.80</td>
    </tr>
    <tr>
      <th>11960</th>
      <td>60774</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>OPS</td>
      <td>AF</td>
      <td>37.22</td>
    </tr>
    <tr>
      <th>11958</th>
      <td>60772</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>34.50</td>
    </tr>
    <tr>
      <th>11959</th>
      <td>60773</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>898.40</td>
    </tr>
    <tr>
      <th>11957</th>
      <td>60771</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>GND</td>
      <td>GND</td>
      <td>121.65</td>
    </tr>
    <tr>
      <th>11956</th>
      <td>60770</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>DEP</td>
      <td>SOCAL DEP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>11955</th>
      <td>60769</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>CLD</td>
      <td>CLNC DEL</td>
      <td>121.40</td>
    </tr>
    <tr>
      <th>11954</th>
      <td>60768</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>133.80</td>
    </tr>
    <tr>
      <th>11952</th>
      <td>60767</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>36.07</td>
    </tr>
    <tr>
      <th>11953</th>
      <td>60766</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>124.30</td>
    </tr>
  </tbody>
</table>
</div>

```python
!pip install pandasql
```

    Requirement already satisfied: pandasql in d:\bin\miniconda3\envs\blog\lib\site-packages (0.7.3)
    Requirement already satisfied: pandas in d:\bin\miniconda3\envs\blog\lib\site-packages (from pandasql) (1.1.1)
    Requirement already satisfied: sqlalchemy in d:\bin\miniconda3\envs\blog\lib\site-packages (from pandasql) (1.3.19)
    Requirement already satisfied: numpy in d:\bin\miniconda3\envs\blog\lib\site-packages (from pandasql) (1.19.1)
    Requirement already satisfied: python-dateutil>=2.7.3 in d:\bin\miniconda3\envs\blog\lib\site-packages (from pandas->pandasql) (2.8.1)
    Requirement already satisfied: pytz>=2017.2 in d:\bin\miniconda3\envs\blog\lib\site-packages (from pandas->pandasql) (2020.1)
    Requirement already satisfied: six>=1.5 in d:\bin\miniconda3\envs\blog\lib\site-packages (from python-dateutil>=2.7.3->pandas->pandasql) (1.15.0)

```python
import pandasql as ps
sql = '''
  select * 
    from airport_freq 
   where airport_ident = 'KLAX' 
order by type desc;
'''
df = ps.sqldf(sql)
type(df)
```

    pandas.core.frame.DataFrame

```python
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>60776</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.95</td>
    </tr>
    <tr>
      <th>1</th>
      <td>60775</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>119.80</td>
    </tr>
    <tr>
      <th>2</th>
      <td>60774</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>OPS</td>
      <td>AF</td>
      <td>37.22</td>
    </tr>
    <tr>
      <th>3</th>
      <td>60772</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>34.50</td>
    </tr>
    <tr>
      <th>4</th>
      <td>60773</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>898.40</td>
    </tr>
    <tr>
      <th>5</th>
      <td>60771</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>GND</td>
      <td>GND</td>
      <td>121.65</td>
    </tr>
    <tr>
      <th>6</th>
      <td>60770</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>DEP</td>
      <td>SOCAL DEP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>7</th>
      <td>60769</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>CLD</td>
      <td>CLNC DEL</td>
      <td>121.40</td>
    </tr>
    <tr>
      <th>8</th>
      <td>60768</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>133.80</td>
    </tr>
    <tr>
      <th>9</th>
      <td>60767</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>36.07</td>
    </tr>
    <tr>
      <th>10</th>
      <td>60766</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>124.30</td>
    </tr>
  </tbody>
</table>
</div>

# SELECT, WHERE, DISTINCT, LIMIT

```sql
select * 
  from airports;
```

```python
airports
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>6523</td>
      <td>00A</td>
      <td>heliport</td>
      <td>Total Rf Heliport</td>
      <td>40.070801</td>
      <td>-74.933601</td>
      <td>11.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-PA</td>
      <td>Bensalem</td>
      <td>no</td>
      <td>00A</td>
      <td>NaN</td>
      <td>00A</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>323361</td>
      <td>00AA</td>
      <td>small_airport</td>
      <td>Aero B Ranch Airport</td>
      <td>38.704022</td>
      <td>-101.473911</td>
      <td>3435.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-KS</td>
      <td>Leoti</td>
      <td>no</td>
      <td>00AA</td>
      <td>NaN</td>
      <td>00AA</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.949200</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>6525</td>
      <td>00AL</td>
      <td>small_airport</td>
      <td>Epps Airpark</td>
      <td>34.864799</td>
      <td>-86.770302</td>
      <td>820.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AL</td>
      <td>Harvest</td>
      <td>no</td>
      <td>00AL</td>
      <td>NaN</td>
      <td>00AL</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>6526</td>
      <td>00AR</td>
      <td>closed</td>
      <td>Newport Hospital &amp; Clinic Heliport</td>
      <td>35.608700</td>
      <td>-91.254898</td>
      <td>237.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AR</td>
      <td>Newport</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>00AR</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>57371</th>
      <td>317861</td>
      <td>ZYYK</td>
      <td>medium_airport</td>
      <td>Yingkou Lanqi Airport</td>
      <td>40.542524</td>
      <td>122.358600</td>
      <td>0.0</td>
      <td>AS</td>
      <td>CN</td>
      <td>CN-21</td>
      <td>Yingkou</td>
      <td>yes</td>
      <td>ZYYK</td>
      <td>YKH</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>https://en.wikipedia.org/wiki/Yingkou_Lanqi_Ai...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57372</th>
      <td>32753</td>
      <td>ZYYY</td>
      <td>medium_airport</td>
      <td>Shenyang Dongta Airport</td>
      <td>41.784401</td>
      <td>123.496002</td>
      <td>NaN</td>
      <td>AS</td>
      <td>CN</td>
      <td>CN-21</td>
      <td>Shenyang</td>
      <td>no</td>
      <td>ZYYY</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57373</th>
      <td>46378</td>
      <td>ZZ-0001</td>
      <td>heliport</td>
      <td>Sealand Helipad</td>
      <td>51.894444</td>
      <td>1.482500</td>
      <td>40.0</td>
      <td>EU</td>
      <td>GB</td>
      <td>GB-ENG</td>
      <td>Sealand</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>http://www.sealandgov.org/</td>
      <td>https://en.wikipedia.org/wiki/Principality_of_...</td>
      <td>Roughs Tower Helipad</td>
    </tr>
    <tr>
      <th>57374</th>
      <td>307326</td>
      <td>ZZ-0002</td>
      <td>small_airport</td>
      <td>Glorioso Islands Airstrip</td>
      <td>-11.584278</td>
      <td>47.296389</td>
      <td>11.0</td>
      <td>AF</td>
      <td>TF</td>
      <td>TF-U-A</td>
      <td>Grande Glorieuse</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57375</th>
      <td>313629</td>
      <td>ZZZZ</td>
      <td>small_airport</td>
      <td>Satsuma Iōjima Airport</td>
      <td>30.784722</td>
      <td>130.270556</td>
      <td>338.0</td>
      <td>AS</td>
      <td>JP</td>
      <td>JP-46</td>
      <td>Mishima-Mura</td>
      <td>no</td>
      <td>RJX7</td>
      <td>NaN</td>
      <td>RJX7</td>
      <td>NaN</td>
      <td>http://wikimapia.org/6705190/Satsuma-Iwo-jima-...</td>
      <td>SATSUMA,IWOJIMA,RJX7</td>
    </tr>
  </tbody>
</table>
<p>57376 rows × 18 columns</p>
</div>

```sql
select municipality 
  from airports
```

```python
sr = airports.municipality
print(type(sr))
```

    <class 'pandas.core.series.Series'>

```python
sr
```

    0                Bensalem
    1                   Leoti
    2            Anchor Point
    3                 Harvest
    4                 Newport
                   ...       
    57371             Yingkou
    57372            Shenyang
    57373             Sealand
    57374    Grande Glorieuse
    57375        Mishima-Mura
    Name: municipality, Length: 57376, dtype: object

```sql
select municipality 
  from airports
 limit 4;
```

```python
airports.head(4).municipality
```

    0        Bensalem
    1           Leoti
    2    Anchor Point
    3         Harvest
    Name: municipality, dtype: object

```python
airports.municipality.head(4)
```

    0        Bensalem
    1           Leoti
    2    Anchor Point
    3         Harvest
    Name: municipality, dtype: object

```sql
select ident, 
       name, 
       municipality 
  from airports;
```

```python
df = airports[['ident', 'name', 'municipality']]
type(df)
```

    pandas.core.frame.DataFrame

```python
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>00A</td>
      <td>Total Rf Heliport</td>
      <td>Bensalem</td>
    </tr>
    <tr>
      <th>1</th>
      <td>00AA</td>
      <td>Aero B Ranch Airport</td>
      <td>Leoti</td>
    </tr>
    <tr>
      <th>2</th>
      <td>00AK</td>
      <td>Lowell Field</td>
      <td>Anchor Point</td>
    </tr>
    <tr>
      <th>3</th>
      <td>00AL</td>
      <td>Epps Airpark</td>
      <td>Harvest</td>
    </tr>
    <tr>
      <th>4</th>
      <td>00AR</td>
      <td>Newport Hospital &amp; Clinic Heliport</td>
      <td>Newport</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>57371</th>
      <td>ZYYK</td>
      <td>Yingkou Lanqi Airport</td>
      <td>Yingkou</td>
    </tr>
    <tr>
      <th>57372</th>
      <td>ZYYY</td>
      <td>Shenyang Dongta Airport</td>
      <td>Shenyang</td>
    </tr>
    <tr>
      <th>57373</th>
      <td>ZZ-0001</td>
      <td>Sealand Helipad</td>
      <td>Sealand</td>
    </tr>
    <tr>
      <th>57374</th>
      <td>ZZ-0002</td>
      <td>Glorioso Islands Airstrip</td>
      <td>Grande Glorieuse</td>
    </tr>
    <tr>
      <th>57375</th>
      <td>ZZZZ</td>
      <td>Satsuma Iōjima Airport</td>
      <td>Mishima-Mura</td>
    </tr>
  </tbody>
</table>
<p>57376 rows × 3 columns</p>
</div>

```sql
select * 
  from airports 
 where municipality = 'Anchor Point';
```

```python
airports[airports.municipality == 'Anchor Point']
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.9492</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>10523</th>
      <td>16097</td>
      <td>AK00</td>
      <td>small_airport</td>
      <td>Anchor River Airpark</td>
      <td>59.7967</td>
      <td>-151.863007</td>
      <td>120.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>AK00</td>
      <td>NaN</td>
      <td>AK00</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

```python
airports[airports['municipality'] == 'Anchor Point']
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.9492</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>10523</th>
      <td>16097</td>
      <td>AK00</td>
      <td>small_airport</td>
      <td>Anchor River Airpark</td>
      <td>59.7967</td>
      <td>-151.863007</td>
      <td>120.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>AK00</td>
      <td>NaN</td>
      <td>AK00</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

```python
airports[airports.index == 2]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.9492</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

```python
df = airports[airports.municipality == 'Anchor Point']
type(df)
```

    pandas.core.frame.DataFrame

```python
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.9492</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>10523</th>
      <td>16097</td>
      <td>AK00</td>
      <td>small_airport</td>
      <td>Anchor River Airpark</td>
      <td>59.7967</td>
      <td>-151.863007</td>
      <td>120.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>AK00</td>
      <td>NaN</td>
      <td>AK00</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

```sql
select ident, 
       name, 
       municipality 
  from airports 
 where municipality = 'Los Angeles'
```

```python
airports[airports.municipality == 'Los Angeles'] \
             [['ident', 'name', 'municipality']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>71</th>
      <td>01CN</td>
      <td>Los Angeles County Sheriff's Department Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>643</th>
      <td>0CA0</td>
      <td>Drew Medical Center Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>645</th>
      <td>0CA2</td>
      <td>VA Greater Los Angeles Health Care Center Heli...</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>670</th>
      <td>0CL7</td>
      <td>Good Samaritan Hospital Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>1465</th>
      <td>14L</td>
      <td>Devonshire Area Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>52334</th>
      <td>US-1472</td>
      <td>Murdock Plaza Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52356</th>
      <td>US-1494</td>
      <td>Center West Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52358</th>
      <td>US-1496</td>
      <td>W Hollywood Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52359</th>
      <td>US-1497</td>
      <td>1600 Vine Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52360</th>
      <td>US-1498</td>
      <td>Vine Street Tower Helipad</td>
      <td>Los Angeles</td>
    </tr>
  </tbody>
</table>
<p>100 rows × 3 columns</p>
</div>

```python
airports[['ident', 'name', 'municipality']] \
            [airports.municipality == 'Los Angeles']
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>71</th>
      <td>01CN</td>
      <td>Los Angeles County Sheriff's Department Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>643</th>
      <td>0CA0</td>
      <td>Drew Medical Center Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>645</th>
      <td>0CA2</td>
      <td>VA Greater Los Angeles Health Care Center Heli...</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>670</th>
      <td>0CL7</td>
      <td>Good Samaritan Hospital Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>1465</th>
      <td>14L</td>
      <td>Devonshire Area Heliport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>52334</th>
      <td>US-1472</td>
      <td>Murdock Plaza Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52356</th>
      <td>US-1494</td>
      <td>Center West Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52358</th>
      <td>US-1496</td>
      <td>W Hollywood Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52359</th>
      <td>US-1497</td>
      <td>1600 Vine Helipad</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>52360</th>
      <td>US-1498</td>
      <td>Vine Street Tower Helipad</td>
      <td>Los Angeles</td>
    </tr>
  </tbody>
</table>
<p>100 rows × 3 columns</p>
</div>

```sql
select distinct municipality 
  from airport;
```

```python
airports.municipality.unique()
```

    array(['Bensalem', 'Leoti', 'Anchor Point', ..., 'Sealand',
           'Grande Glorieuse', 'Mishima-Mura'], dtype=object)

```python
airports[['ident', 'name', 'municipality']] #.unique()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>00A</td>
      <td>Total Rf Heliport</td>
      <td>Bensalem</td>
    </tr>
    <tr>
      <th>1</th>
      <td>00AA</td>
      <td>Aero B Ranch Airport</td>
      <td>Leoti</td>
    </tr>
    <tr>
      <th>2</th>
      <td>00AK</td>
      <td>Lowell Field</td>
      <td>Anchor Point</td>
    </tr>
    <tr>
      <th>3</th>
      <td>00AL</td>
      <td>Epps Airpark</td>
      <td>Harvest</td>
    </tr>
    <tr>
      <th>4</th>
      <td>00AR</td>
      <td>Newport Hospital &amp; Clinic Heliport</td>
      <td>Newport</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>57371</th>
      <td>ZYYK</td>
      <td>Yingkou Lanqi Airport</td>
      <td>Yingkou</td>
    </tr>
    <tr>
      <th>57372</th>
      <td>ZYYY</td>
      <td>Shenyang Dongta Airport</td>
      <td>Shenyang</td>
    </tr>
    <tr>
      <th>57373</th>
      <td>ZZ-0001</td>
      <td>Sealand Helipad</td>
      <td>Sealand</td>
    </tr>
    <tr>
      <th>57374</th>
      <td>ZZ-0002</td>
      <td>Glorioso Islands Airstrip</td>
      <td>Grande Glorieuse</td>
    </tr>
    <tr>
      <th>57375</th>
      <td>ZZZZ</td>
      <td>Satsuma Iōjima Airport</td>
      <td>Mishima-Mura</td>
    </tr>
  </tbody>
</table>
<p>57376 rows × 3 columns</p>
</div>

# SELECT with multiple conditions

```sql
select * 
  from airports 
 where iso_region = 'US-CA' 
   and type = 'seaplane_base';
```

```python
df = airports[(airports.iso_region == 'US-CA') 
              & (airports.type == 'seaplane_base')] \
             [['name', 'iso_region', 'type']]
print(type(df))
```

    <class 'pandas.core.frame.DataFrame'>

```python
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>iso_region</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>984</th>
      <td>San Luis Reservoir Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>2505</th>
      <td>Commodore Center Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>6278</th>
      <td>Konocti  - Clear Lake Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>13587</th>
      <td>Folsom Lake Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>15932</th>
      <td>Ferndale Resort Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>18323</th>
      <td>Lake Berryessa Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>23853</th>
      <td>Bridge Bay Resort Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>31879</th>
      <td>Pebbly Beach Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>38693</th>
      <td>Lake Oroville Landing Area Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>42411</th>
      <td>Lost Isle Seaplane Base</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
    <tr>
      <th>49939</th>
      <td>Two Harbors Amphibious Terminal</td>
      <td>US-CA</td>
      <td>seaplane_base</td>
    </tr>
  </tbody>
</table>
</div>

```sql
select ident, 
       name, 
       municipality 
  from airports 
 where iso_region = 'US-CA' 
   and type = 'large_airport';
```

```python
airports[(airports.iso_region == 'US-CA') & (airports.type == 'large_airport')] \
             [['ident', 'name', 'municipality']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>27512</th>
      <td>KBAB</td>
      <td>Beale Air Force Base</td>
      <td>Marysville</td>
    </tr>
    <tr>
      <th>28350</th>
      <td>KEDW</td>
      <td>Edwards Air Force Base</td>
      <td>Edwards</td>
    </tr>
    <tr>
      <th>29141</th>
      <td>KLAX</td>
      <td>Los Angeles International Airport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>29668</th>
      <td>KOAK</td>
      <td>Metropolitan Oakland International Airport</td>
      <td>Oakland</td>
    </tr>
    <tr>
      <th>29724</th>
      <td>KONT</td>
      <td>Ontario International Airport</td>
      <td>Ontario</td>
    </tr>
    <tr>
      <th>31245</th>
      <td>KSAN</td>
      <td>San Diego International Airport</td>
      <td>San Diego</td>
    </tr>
    <tr>
      <th>31285</th>
      <td>KSFO</td>
      <td>San Francisco International Airport</td>
      <td>San Francisco</td>
    </tr>
    <tr>
      <th>31306</th>
      <td>KSJC</td>
      <td>Norman Y. Mineta San Jose International Airport</td>
      <td>San Jose</td>
    </tr>
    <tr>
      <th>31328</th>
      <td>KSMF</td>
      <td>Sacramento International Airport</td>
      <td>Sacramento</td>
    </tr>
    <tr>
      <th>31334</th>
      <td>KSNA</td>
      <td>John Wayne Airport-Orange County Airport</td>
      <td>Santa Ana</td>
    </tr>
    <tr>
      <th>31383</th>
      <td>KSUU</td>
      <td>Travis Air Force Base</td>
      <td>Fairfield</td>
    </tr>
    <tr>
      <th>31617</th>
      <td>KVBG</td>
      <td>Vandenberg Air Force Base</td>
      <td>Lompoc</td>
    </tr>
  </tbody>
</table>
</div>

```python
airports[['ident', 'name', 'municipality']] \
             [(airports.iso_region == 'US-CA') & (airports.type == 'large_airport')] 
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>27512</th>
      <td>KBAB</td>
      <td>Beale Air Force Base</td>
      <td>Marysville</td>
    </tr>
    <tr>
      <th>28350</th>
      <td>KEDW</td>
      <td>Edwards Air Force Base</td>
      <td>Edwards</td>
    </tr>
    <tr>
      <th>29141</th>
      <td>KLAX</td>
      <td>Los Angeles International Airport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>29668</th>
      <td>KOAK</td>
      <td>Metropolitan Oakland International Airport</td>
      <td>Oakland</td>
    </tr>
    <tr>
      <th>29724</th>
      <td>KONT</td>
      <td>Ontario International Airport</td>
      <td>Ontario</td>
    </tr>
    <tr>
      <th>31245</th>
      <td>KSAN</td>
      <td>San Diego International Airport</td>
      <td>San Diego</td>
    </tr>
    <tr>
      <th>31285</th>
      <td>KSFO</td>
      <td>San Francisco International Airport</td>
      <td>San Francisco</td>
    </tr>
    <tr>
      <th>31306</th>
      <td>KSJC</td>
      <td>Norman Y. Mineta San Jose International Airport</td>
      <td>San Jose</td>
    </tr>
    <tr>
      <th>31328</th>
      <td>KSMF</td>
      <td>Sacramento International Airport</td>
      <td>Sacramento</td>
    </tr>
    <tr>
      <th>31334</th>
      <td>KSNA</td>
      <td>John Wayne Airport-Orange County Airport</td>
      <td>Santa Ana</td>
    </tr>
    <tr>
      <th>31383</th>
      <td>KSUU</td>
      <td>Travis Air Force Base</td>
      <td>Fairfield</td>
    </tr>
    <tr>
      <th>31617</th>
      <td>KVBG</td>
      <td>Vandenberg Air Force Base</td>
      <td>Lompoc</td>
    </tr>
  </tbody>
</table>
</div>

# ORDER BY

```sql
  select * 
    from airport_freq 
   where airport_ident = 'KLAX' 
order by type;
```

```python
airport_freq[airport_freq.airport_ident == 'KLAX'].sort_values('type')
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>11952</th>
      <td>60767</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>36.07</td>
    </tr>
    <tr>
      <th>11953</th>
      <td>60766</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>11954</th>
      <td>60768</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>133.80</td>
    </tr>
    <tr>
      <th>11955</th>
      <td>60769</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>CLD</td>
      <td>CLNC DEL</td>
      <td>121.40</td>
    </tr>
    <tr>
      <th>11956</th>
      <td>60770</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>DEP</td>
      <td>SOCAL DEP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>11957</th>
      <td>60771</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>GND</td>
      <td>GND</td>
      <td>121.65</td>
    </tr>
    <tr>
      <th>11958</th>
      <td>60772</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>34.50</td>
    </tr>
    <tr>
      <th>11959</th>
      <td>60773</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>898.40</td>
    </tr>
    <tr>
      <th>11960</th>
      <td>60774</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>OPS</td>
      <td>AF</td>
      <td>37.22</td>
    </tr>
    <tr>
      <th>11961</th>
      <td>60775</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>119.80</td>
    </tr>
    <tr>
      <th>11962</th>
      <td>60776</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.95</td>
    </tr>
  </tbody>
</table>
</div>

```sql
  select * 
    from airport_freq 
   where airport_ident = 'KLAX' 
order by type desc;
```

```python
airport_freq[airport_freq.airport_ident == 'KLAX'].sort_values('type', ascending=False)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>11962</th>
      <td>60776</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.95</td>
    </tr>
    <tr>
      <th>11961</th>
      <td>60775</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>119.80</td>
    </tr>
    <tr>
      <th>11960</th>
      <td>60774</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>OPS</td>
      <td>AF</td>
      <td>37.22</td>
    </tr>
    <tr>
      <th>11958</th>
      <td>60772</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>34.50</td>
    </tr>
    <tr>
      <th>11959</th>
      <td>60773</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>898.40</td>
    </tr>
    <tr>
      <th>11957</th>
      <td>60771</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>GND</td>
      <td>GND</td>
      <td>121.65</td>
    </tr>
    <tr>
      <th>11956</th>
      <td>60770</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>DEP</td>
      <td>SOCAL DEP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>11955</th>
      <td>60769</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>CLD</td>
      <td>CLNC DEL</td>
      <td>121.40</td>
    </tr>
    <tr>
      <th>11954</th>
      <td>60768</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>133.80</td>
    </tr>
    <tr>
      <th>11952</th>
      <td>60767</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>36.07</td>
    </tr>
    <tr>
      <th>11953</th>
      <td>60766</td>
      <td>3632</td>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>124.30</td>
    </tr>
  </tbody>
</table>
</div>

# IN… NOT IN

```sql
select * 
  from airports 
 where type in ('heliport', 'balloonport');
```

```python
airports[airports.type.isin(['heliport', 'balloonport'])]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>6523</td>
      <td>00A</td>
      <td>heliport</td>
      <td>Total Rf Heliport</td>
      <td>40.070801</td>
      <td>-74.933601</td>
      <td>11.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-PA</td>
      <td>Bensalem</td>
      <td>no</td>
      <td>00A</td>
      <td>NaN</td>
      <td>00A</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>9</th>
      <td>322658</td>
      <td>00CN</td>
      <td>heliport</td>
      <td>Kitchen Creek Helibase Heliport</td>
      <td>32.727374</td>
      <td>-116.459742</td>
      <td>3350.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-CA</td>
      <td>Pine Valley</td>
      <td>no</td>
      <td>00CN</td>
      <td>NaN</td>
      <td>00CN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>12</th>
      <td>6532</td>
      <td>00FD</td>
      <td>heliport</td>
      <td>Ringhaver Heliport</td>
      <td>28.846600</td>
      <td>-82.345398</td>
      <td>25.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-FL</td>
      <td>Riverview</td>
      <td>no</td>
      <td>00FD</td>
      <td>NaN</td>
      <td>00FD</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>15</th>
      <td>6535</td>
      <td>00GE</td>
      <td>heliport</td>
      <td>Caffrey Heliport</td>
      <td>33.884201</td>
      <td>-84.733902</td>
      <td>957.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-GA</td>
      <td>Hiram</td>
      <td>no</td>
      <td>00GE</td>
      <td>NaN</td>
      <td>00GE</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>16</th>
      <td>6536</td>
      <td>00HI</td>
      <td>heliport</td>
      <td>Kaupulehu Heliport</td>
      <td>19.832715</td>
      <td>-155.980233</td>
      <td>43.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-HI</td>
      <td>Kailua-Kona</td>
      <td>no</td>
      <td>00HI</td>
      <td>NaN</td>
      <td>00HI</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>56988</th>
      <td>312611</td>
      <td>ZA-0117</td>
      <td>heliport</td>
      <td>Pumba Helipad</td>
      <td>-33.387799</td>
      <td>26.410595</td>
      <td>NaN</td>
      <td>AF</td>
      <td>ZA</td>
      <td>ZA-EC</td>
      <td>Nelson Mandela Bay</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>http://www.pumbagamereserve.co.za/amenities</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>56990</th>
      <td>312624</td>
      <td>ZA-0119</td>
      <td>heliport</td>
      <td>Cape Town Heliport</td>
      <td>-33.901018</td>
      <td>18.425936</td>
      <td>NaN</td>
      <td>AF</td>
      <td>ZA</td>
      <td>ZA-WC</td>
      <td>NaN</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57011</th>
      <td>318475</td>
      <td>ZA-0140</td>
      <td>heliport</td>
      <td>Kuruman Hospital Heliport</td>
      <td>-27.459904</td>
      <td>23.443762</td>
      <td>NaN</td>
      <td>AF</td>
      <td>ZA</td>
      <td>ZA-NC</td>
      <td>Kuruman</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57108</th>
      <td>301278</td>
      <td>ZIZ</td>
      <td>heliport</td>
      <td>Zamzama Heliport</td>
      <td>26.710944</td>
      <td>67.667250</td>
      <td>128.0</td>
      <td>AS</td>
      <td>PK</td>
      <td>PK-SD</td>
      <td>Zamzama Gas Field</td>
      <td>no</td>
      <td>NaN</td>
      <td>ZIZ</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57373</th>
      <td>46378</td>
      <td>ZZ-0001</td>
      <td>heliport</td>
      <td>Sealand Helipad</td>
      <td>51.894444</td>
      <td>1.482500</td>
      <td>40.0</td>
      <td>EU</td>
      <td>GB</td>
      <td>GB-ENG</td>
      <td>Sealand</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>http://www.sealandgov.org/</td>
      <td>https://en.wikipedia.org/wiki/Principality_of_...</td>
      <td>Roughs Tower Helipad</td>
    </tr>
  </tbody>
</table>
<p>12031 rows × 18 columns</p>
</div>

```sql
select * 
  from airports 
 where type not in ('heliport', 'balloonport');
```

```python
airports[~airports.type.isin(['heliport', 'balloonport'])]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ident</th>
      <th>type</th>
      <th>name</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
      <th>continent</th>
      <th>iso_country</th>
      <th>iso_region</th>
      <th>municipality</th>
      <th>scheduled_service</th>
      <th>gps_code</th>
      <th>iata_code</th>
      <th>local_code</th>
      <th>home_link</th>
      <th>wikipedia_link</th>
      <th>keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>323361</td>
      <td>00AA</td>
      <td>small_airport</td>
      <td>Aero B Ranch Airport</td>
      <td>38.704022</td>
      <td>-101.473911</td>
      <td>3435.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-KS</td>
      <td>Leoti</td>
      <td>no</td>
      <td>00AA</td>
      <td>NaN</td>
      <td>00AA</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6524</td>
      <td>00AK</td>
      <td>small_airport</td>
      <td>Lowell Field</td>
      <td>59.949200</td>
      <td>-151.695999</td>
      <td>450.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AK</td>
      <td>Anchor Point</td>
      <td>no</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>00AK</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>6525</td>
      <td>00AL</td>
      <td>small_airport</td>
      <td>Epps Airpark</td>
      <td>34.864799</td>
      <td>-86.770302</td>
      <td>820.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AL</td>
      <td>Harvest</td>
      <td>no</td>
      <td>00AL</td>
      <td>NaN</td>
      <td>00AL</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>6526</td>
      <td>00AR</td>
      <td>closed</td>
      <td>Newport Hospital &amp; Clinic Heliport</td>
      <td>35.608700</td>
      <td>-91.254898</td>
      <td>237.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-AR</td>
      <td>Newport</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>00AR</td>
    </tr>
    <tr>
      <th>5</th>
      <td>322127</td>
      <td>00AS</td>
      <td>small_airport</td>
      <td>Fulton Airport</td>
      <td>34.942803</td>
      <td>-97.818019</td>
      <td>1100.0</td>
      <td>NaN</td>
      <td>US</td>
      <td>US-OK</td>
      <td>Alex</td>
      <td>no</td>
      <td>00AS</td>
      <td>NaN</td>
      <td>00AS</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>57370</th>
      <td>27244</td>
      <td>ZYYJ</td>
      <td>medium_airport</td>
      <td>Yanji Chaoyangchuan Airport</td>
      <td>42.882801</td>
      <td>129.451004</td>
      <td>624.0</td>
      <td>AS</td>
      <td>CN</td>
      <td>CN-22</td>
      <td>Yanji</td>
      <td>yes</td>
      <td>ZYYJ</td>
      <td>YNJ</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>https://en.wikipedia.org/wiki/Yanji_Chaoyangch...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57371</th>
      <td>317861</td>
      <td>ZYYK</td>
      <td>medium_airport</td>
      <td>Yingkou Lanqi Airport</td>
      <td>40.542524</td>
      <td>122.358600</td>
      <td>0.0</td>
      <td>AS</td>
      <td>CN</td>
      <td>CN-21</td>
      <td>Yingkou</td>
      <td>yes</td>
      <td>ZYYK</td>
      <td>YKH</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>https://en.wikipedia.org/wiki/Yingkou_Lanqi_Ai...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57372</th>
      <td>32753</td>
      <td>ZYYY</td>
      <td>medium_airport</td>
      <td>Shenyang Dongta Airport</td>
      <td>41.784401</td>
      <td>123.496002</td>
      <td>NaN</td>
      <td>AS</td>
      <td>CN</td>
      <td>CN-21</td>
      <td>Shenyang</td>
      <td>no</td>
      <td>ZYYY</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57374</th>
      <td>307326</td>
      <td>ZZ-0002</td>
      <td>small_airport</td>
      <td>Glorioso Islands Airstrip</td>
      <td>-11.584278</td>
      <td>47.296389</td>
      <td>11.0</td>
      <td>AF</td>
      <td>TF</td>
      <td>TF-U-A</td>
      <td>Grande Glorieuse</td>
      <td>no</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>57375</th>
      <td>313629</td>
      <td>ZZZZ</td>
      <td>small_airport</td>
      <td>Satsuma Iōjima Airport</td>
      <td>30.784722</td>
      <td>130.270556</td>
      <td>338.0</td>
      <td>AS</td>
      <td>JP</td>
      <td>JP-46</td>
      <td>Mishima-Mura</td>
      <td>no</td>
      <td>RJX7</td>
      <td>NaN</td>
      <td>RJX7</td>
      <td>NaN</td>
      <td>http://wikimapia.org/6705190/Satsuma-Iwo-jima-...</td>
      <td>SATSUMA,IWOJIMA,RJX7</td>
    </tr>
  </tbody>
</table>
<p>45345 rows × 18 columns</p>
</div>

# GROUP BY, COUNT, SUM, ORDER BY

```sql
  select iso_country, 
         type, 
         count(*) 
    from airports 
group by iso_country, 
         type 
order by iso_country, 
         type;
```

```python
airports.groupby(['iso_country', 'type']).size()
```

    iso_country  type          
    AD           heliport            2
    AE           closed              1
                 heliport           21
                 large_airport       4
                 medium_airport      7
                                  ... 
    ZM           small_airport      94
    ZW           closed              2
                 large_airport       1
                 medium_airport      8
                 small_airport     128
    Length: 850, dtype: int64

```sql
  select iso_country, 
         type, 
         count(*) 
    from airports 
group by iso_country, 
         type 
order by iso_country, 
         count(*) desc;
```

```python
airports.groupby(['iso_country', 'type']).size()  \
        .to_frame('count').reset_index()  \
        .sort_values(['iso_country', 'count'], ascending=[True, False])
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>iso_country</th>
      <th>type</th>
      <th>count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>AD</td>
      <td>heliport</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>AE</td>
      <td>heliport</td>
      <td>21</td>
    </tr>
    <tr>
      <th>6</th>
      <td>AE</td>
      <td>small_airport</td>
      <td>16</td>
    </tr>
    <tr>
      <th>4</th>
      <td>AE</td>
      <td>medium_airport</td>
      <td>7</td>
    </tr>
    <tr>
      <th>3</th>
      <td>AE</td>
      <td>large_airport</td>
      <td>4</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>843</th>
      <td>ZM</td>
      <td>large_airport</td>
      <td>1</td>
    </tr>
    <tr>
      <th>849</th>
      <td>ZW</td>
      <td>small_airport</td>
      <td>128</td>
    </tr>
    <tr>
      <th>848</th>
      <td>ZW</td>
      <td>medium_airport</td>
      <td>8</td>
    </tr>
    <tr>
      <th>846</th>
      <td>ZW</td>
      <td>closed</td>
      <td>2</td>
    </tr>
    <tr>
      <th>847</th>
      <td>ZW</td>
      <td>large_airport</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<p>850 rows × 3 columns</p>
</div>

이건 좀 더 봐야겠다

```python
airports.groupby(['iso_country', 'type']).sum()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>id</th>
      <th>latitude_deg</th>
      <th>longitude_deg</th>
      <th>elevation_ft</th>
    </tr>
    <tr>
      <th>iso_country</th>
      <th>type</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>AD</th>
      <th>heliport</th>
      <td>360076</td>
      <td>85.057431</td>
      <td>3.052711</td>
      <td>3450.0</td>
    </tr>
    <tr>
      <th rowspan="4" valign="top">AE</th>
      <th>closed</th>
      <td>42256</td>
      <td>23.298100</td>
      <td>54.221699</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>heliport</th>
      <td>6389256</td>
      <td>519.481986</td>
      <td>1140.423719</td>
      <td>706.0</td>
    </tr>
    <tr>
      <th>large_airport</th>
      <td>316020</td>
      <td>99.910756</td>
      <td>220.694089</td>
      <td>375.0</td>
    </tr>
    <tr>
      <th>medium_airport</th>
      <td>347052</td>
      <td>172.974312</td>
      <td>384.824277</td>
      <td>1406.0</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>ZM</th>
      <th>small_airport</th>
      <td>11283607</td>
      <td>-1294.718014</td>
      <td>2640.091073</td>
      <td>255681.0</td>
    </tr>
    <tr>
      <th rowspan="4" valign="top">ZW</th>
      <th>closed</th>
      <td>654955</td>
      <td>-34.870921</td>
      <td>54.895665</td>
      <td>6779.0</td>
    </tr>
    <tr>
      <th>large_airport</th>
      <td>3005</td>
      <td>-17.931801</td>
      <td>31.092800</td>
      <td>4887.0</td>
    </tr>
    <tr>
      <th>medium_airport</th>
      <td>24058</td>
      <td>-151.194701</td>
      <td>234.847004</td>
      <td>26744.0</td>
    </tr>
    <tr>
      <th>small_airport</th>
      <td>19701085</td>
      <td>-2384.126237</td>
      <td>3832.335854</td>
      <td>273732.0</td>
    </tr>
  </tbody>
</table>
<p>850 rows × 4 columns</p>
</div>

# HAVING

```sql
  select type, 
         count(*) 
    from airports 
   where iso_country = 'US' 
group by type 
  having count(*) > 1000 
order by count(*) desc;
```

```python
s = airports[airports.iso_country == 'US'] \
             .groupby('type').filter(lambda g: len(g) > 1000) \
             .groupby('type').size() \
             .sort_values(ascending=False)
type(s)
```

    pandas.core.series.Series

```python
s
```

    type
    small_airport    13565
    heliport          6316
    closed            1930
    dtype: int64

```python
s.heliport
```

    6316

# Top N records

```sql
  select iso_country 
    from by_country 
order by size desc 
   limit 10;
```

```python
by_country = airports.groupby(['iso_country']).size()\
                     .to_frame('airport_count').reset_index()
df = by_country.nlargest(10, columns='airport_count')
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>iso_country</th>
      <th>airport_count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>224</th>
      <td>US</td>
      <td>23260</td>
    </tr>
    <tr>
      <th>29</th>
      <td>BR</td>
      <td>4987</td>
    </tr>
    <tr>
      <th>35</th>
      <td>CA</td>
      <td>2796</td>
    </tr>
    <tr>
      <th>12</th>
      <td>AU</td>
      <td>2019</td>
    </tr>
    <tr>
      <th>152</th>
      <td>MX</td>
      <td>1405</td>
    </tr>
    <tr>
      <th>117</th>
      <td>KR</td>
      <td>1374</td>
    </tr>
    <tr>
      <th>74</th>
      <td>GB</td>
      <td>1203</td>
    </tr>
    <tr>
      <th>184</th>
      <td>RU</td>
      <td>1121</td>
    </tr>
    <tr>
      <th>54</th>
      <td>DE</td>
      <td>957</td>
    </tr>
    <tr>
      <th>72</th>
      <td>FR</td>
      <td>894</td>
    </tr>
  </tbody>
</table>
</div>

```sql
  select iso_country 
    from by_country 
   order by size desc 
   limit 10 
  offset 10;
```

```python
by_country.nlargest(10, columns='airport_count').tail(5)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>iso_country</th>
      <th>airport_count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>117</th>
      <td>KR</td>
      <td>1374</td>
    </tr>
    <tr>
      <th>74</th>
      <td>GB</td>
      <td>1203</td>
    </tr>
    <tr>
      <th>184</th>
      <td>RU</td>
      <td>1121</td>
    </tr>
    <tr>
      <th>54</th>
      <td>DE</td>
      <td>957</td>
    </tr>
    <tr>
      <th>72</th>
      <td>FR</td>
      <td>894</td>
    </tr>
  </tbody>
</table>
</div>

# Aggregate functions (MIN, MAX, MEAN)

```sql
  select max(length_ft), 
         min(length_ft), 
         avg(length_ft), 
         median(length_ft)   -- 사용자정의 함수로 만들었다 치고
    from runways;
```

```python
runways.head(3)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>length_ft</th>
      <th>width_ft</th>
      <th>surface</th>
      <th>lighted</th>
      <th>closed</th>
      <th>le_ident</th>
      <th>le_latitude_deg</th>
      <th>le_longitude_deg</th>
      <th>le_elevation_ft</th>
      <th>le_heading_degT</th>
      <th>le_displaced_threshold_ft</th>
      <th>he_ident</th>
      <th>he_latitude_deg</th>
      <th>he_longitude_deg</th>
      <th>he_elevation_ft</th>
      <th>he_heading_degT</th>
      <th>he_displaced_threshold_ft</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>269408</td>
      <td>6523</td>
      <td>00A</td>
      <td>80.0</td>
      <td>80.0</td>
      <td>ASPH-G</td>
      <td>1</td>
      <td>0</td>
      <td>H1</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>255155</td>
      <td>6524</td>
      <td>00AK</td>
      <td>2500.0</td>
      <td>70.0</td>
      <td>GRVL</td>
      <td>0</td>
      <td>0</td>
      <td>N</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>S</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>254165</td>
      <td>6525</td>
      <td>00AL</td>
      <td>2300.0</td>
      <td>200.0</td>
      <td>TURF</td>
      <td>0</td>
      <td>0</td>
      <td>01</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>19</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

```python
runways.describe()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>length_ft</th>
      <th>width_ft</th>
      <th>lighted</th>
      <th>closed</th>
      <th>le_latitude_deg</th>
      <th>le_longitude_deg</th>
      <th>le_elevation_ft</th>
      <th>le_heading_degT</th>
      <th>le_displaced_threshold_ft</th>
      <th>he_latitude_deg</th>
      <th>he_longitude_deg</th>
      <th>he_elevation_ft</th>
      <th>he_heading_degT</th>
      <th>he_displaced_threshold_ft</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>41639.000000</td>
      <td>41639.000000</td>
      <td>41443.000000</td>
      <td>38981.000000</td>
      <td>41639.000000</td>
      <td>41639.000000</td>
      <td>14449.000000</td>
      <td>14444.000000</td>
      <td>12235.000000</td>
      <td>14228.000000</td>
      <td>2819.000000</td>
      <td>14434.000000</td>
      <td>14436.000000</td>
      <td>12118.000000</td>
      <td>16043.000000</td>
      <td>3129.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>257324.082183</td>
      <td>34094.595163</td>
      <td>3262.173684</td>
      <td>110.520125</td>
      <td>0.260741</td>
      <td>0.015562</td>
      <td>31.197196</td>
      <td>-40.312925</td>
      <td>1060.108868</td>
      <td>104.374123</td>
      <td>534.013480</td>
      <td>31.194157</td>
      <td>-40.256715</td>
      <td>1054.425400</td>
      <td>261.749082</td>
      <td>536.128476</td>
    </tr>
    <tr>
      <th>std</th>
      <td>21373.781124</td>
      <td>68108.310531</td>
      <td>2735.615483</td>
      <td>231.510362</td>
      <td>0.439044</td>
      <td>0.123776</td>
      <td>23.021831</td>
      <td>79.858731</td>
      <td>1465.765774</td>
      <td>57.292638</td>
      <td>471.867077</td>
      <td>23.019014</td>
      <td>79.844299</td>
      <td>1458.619056</td>
      <td>78.508982</td>
      <td>466.220434</td>
    </tr>
    <tr>
      <th>min</th>
      <td>232758.000000</td>
      <td>2.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>-75.597200</td>
      <td>-178.303000</td>
      <td>-1246.000000</td>
      <td>0.000000</td>
      <td>1.000000</td>
      <td>-75.595400</td>
      <td>-178.292000</td>
      <td>-1210.000000</td>
      <td>0.000000</td>
      <td>1.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>243178.500000</td>
      <td>8543.500000</td>
      <td>1700.000000</td>
      <td>59.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>28.796800</td>
      <td>-96.667350</td>
      <td>117.000000</td>
      <td>57.000000</td>
      <td>229.500000</td>
      <td>28.788800</td>
      <td>-96.642750</td>
      <td>115.000000</td>
      <td>226.000000</td>
      <td>228.000000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>253593.000000</td>
      <td>18692.000000</td>
      <td>2743.000000</td>
      <td>75.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>37.591200</td>
      <td>-80.403000</td>
      <td>571.000000</td>
      <td>98.700000</td>
      <td>400.000000</td>
      <td>37.579950</td>
      <td>-80.368750</td>
      <td>565.500000</td>
      <td>270.000000</td>
      <td>400.000000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>264015.500000</td>
      <td>27430.500000</td>
      <td>4241.000000</td>
      <td>100.000000</td>
      <td>1.000000</td>
      <td>0.000000</td>
      <td>44.277400</td>
      <td>15.322125</td>
      <td>1247.000000</td>
      <td>148.000000</td>
      <td>685.000000</td>
      <td>44.272275</td>
      <td>15.366575</td>
      <td>1237.000000</td>
      <td>316.000000</td>
      <td>699.000000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>335591.000000</td>
      <td>335590.000000</td>
      <td>120000.000000</td>
      <td>9000.000000</td>
      <td>1.000000</td>
      <td>1.000000</td>
      <td>82.512800</td>
      <td>179.337000</td>
      <td>13202.000000</td>
      <td>360.000000</td>
      <td>6365.000000</td>
      <td>82.522800</td>
      <td>179.343000</td>
      <td>13314.000000</td>
      <td>363.000000</td>
      <td>5001.000000</td>
    </tr>
  </tbody>
</table>
</div>

```python
# df = runways.agg({'length_ft': ['min', 'max', 'mean', 'median', 'count', 'std']})
df = runways.agg({'airport_ref': ['min', 'max', 'mean', 'median', 'count', 'std']})
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>airport_ref</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>min</th>
      <td>2.000000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>335590.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>34094.595163</td>
    </tr>
    <tr>
      <th>median</th>
      <td>18692.000000</td>
    </tr>
    <tr>
      <th>count</th>
      <td>41639.000000</td>
    </tr>
    <tr>
      <th>std</th>
      <td>68108.310531</td>
    </tr>
  </tbody>
</table>
</div>

```python
df.T
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>min</th>
      <th>max</th>
      <th>mean</th>
      <th>median</th>
      <th>count</th>
      <th>std</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>airport_ref</th>
      <td>2.0</td>
      <td>335590.0</td>
      <td>34094.595163</td>
      <td>18692.0</td>
      <td>41639.0</td>
      <td>68108.310531</td>
    </tr>
  </tbody>
</table>
</div>

# JOIN

```sql
  select airport_ident, 
         a.type, 
         a.description, 
         frequency_mhz 
    from airport_freq as a join airports as b
      on airport_freq.airport_ref = airports.id 
   where airports.ident = 'KLAX'
```

```python
airport_freq.merge(
        airports[airports.ident == 'KLAX'][['id']], 
        left_on='airport_ref', 
        right_on='id', 
        how='inner'
     )[['airport_ident', 'type', 'description', 'frequency_mhz']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>36.07</td>
    </tr>
    <tr>
      <th>1</th>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>2</th>
      <td>KLAX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>133.80</td>
    </tr>
    <tr>
      <th>3</th>
      <td>KLAX</td>
      <td>CLD</td>
      <td>CLNC DEL</td>
      <td>121.40</td>
    </tr>
    <tr>
      <th>4</th>
      <td>KLAX</td>
      <td>DEP</td>
      <td>SOCAL DEP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>5</th>
      <td>KLAX</td>
      <td>GND</td>
      <td>GND</td>
      <td>121.65</td>
    </tr>
    <tr>
      <th>6</th>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>34.50</td>
    </tr>
    <tr>
      <th>7</th>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>898.40</td>
    </tr>
    <tr>
      <th>8</th>
      <td>KLAX</td>
      <td>OPS</td>
      <td>AF</td>
      <td>37.22</td>
    </tr>
    <tr>
      <th>9</th>
      <td>KLAX</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>119.80</td>
    </tr>
    <tr>
      <th>10</th>
      <td>KLAX</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.95</td>
    </tr>
  </tbody>
</table>
</div>

```python
pd.merge(
        airport_freq,
        airports[airports.ident == 'KLAX'][['id']], 
        left_on='airport_ref', 
        right_on='id', 
        how='inner'
     )[['airport_ident', 'type', 'description', 'frequency_mhz']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>36.07</td>
    </tr>
    <tr>
      <th>1</th>
      <td>KLAX</td>
      <td>APP</td>
      <td>SOCAL APP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>2</th>
      <td>KLAX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>133.80</td>
    </tr>
    <tr>
      <th>3</th>
      <td>KLAX</td>
      <td>CLD</td>
      <td>CLNC DEL</td>
      <td>121.40</td>
    </tr>
    <tr>
      <th>4</th>
      <td>KLAX</td>
      <td>DEP</td>
      <td>SOCAL DEP</td>
      <td>124.30</td>
    </tr>
    <tr>
      <th>5</th>
      <td>KLAX</td>
      <td>GND</td>
      <td>GND</td>
      <td>121.65</td>
    </tr>
    <tr>
      <th>6</th>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>34.50</td>
    </tr>
    <tr>
      <th>7</th>
      <td>KLAX</td>
      <td>MISC</td>
      <td>CG</td>
      <td>898.40</td>
    </tr>
    <tr>
      <th>8</th>
      <td>KLAX</td>
      <td>OPS</td>
      <td>AF</td>
      <td>37.22</td>
    </tr>
    <tr>
      <th>9</th>
      <td>KLAX</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>119.80</td>
    </tr>
    <tr>
      <th>10</th>
      <td>KLAX</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.95</td>
    </tr>
  </tbody>
</table>
</div>

# UNION ALL and UNION

```sql
  select name, 
         municipality 
    from airports 
   where ident = 'KLAX' 
union all 
  select name, 
         municipality 
    from airports 
   where ident = 'KLGB';
```

```python
airports[airports.ident == 'KLAX'][['name', 'municipality']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>29141</th>
      <td>Los Angeles International Airport</td>
      <td>Los Angeles</td>
    </tr>
  </tbody>
</table>
</div>

```python
airports[airports.ident == 'KLGB'][['name', 'municipality']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>29166</th>
      <td>Long Beach /Daugherty Field/ Airport</td>
      <td>Long Beach</td>
    </tr>
  </tbody>
</table>
</div>

```python
pd.concat([
        airports[airports.ident == 'KLAX'][['name', 'municipality']], 
        airports[airports.ident == 'KLGB'][['name', 'municipality']]
    ])
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>municipality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>29141</th>
      <td>Los Angeles International Airport</td>
      <td>Los Angeles</td>
    </tr>
    <tr>
      <th>29166</th>
      <td>Long Beach /Daugherty Field/ Airport</td>
      <td>Long Beach</td>
    </tr>
  </tbody>
</table>
</div>

# INSERT

```sql
create table heroes (id integer, name text);	
insert into heroes values (1, 'Harry Potter');	
insert into heroes values (2, 'Ron Weasley');	
insert into heroes values (3, 'Hermione Granger');	
```

```python
df1 = pd.DataFrame({'id': [1, 2], 'name': ['Harry Potter', 'Ron Weasley']})
df1
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Harry Potter</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Ron Weasley</td>
    </tr>
  </tbody>
</table>
</div>

```python
df2 = pd.DataFrame({'id': [3], 'name': ['Hermione Granger']})
df2
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>3</td>
      <td>Hermione Granger</td>
    </tr>
  </tbody>
</table>
</div>

```python
pd.concat([df1, df2]).reset_index(drop=True)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Harry Potter</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Ron Weasley</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Hermione Granger</td>
    </tr>
  </tbody>
</table>
</div>

# UPDATE

```sql
update airports 
   set home_link = 'http://www.lawa.org/welcomelax.aspx' 
 where ident == 'KLAX';
```

```python
airports[airports['ident'] == 'KLAX'][['home_link']]
# airports[airports.ident == 'KLAX'][['home_link']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>home_link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>29141</th>
      <td>https://www.flylax.com/</td>
    </tr>
  </tbody>
</table>
</div>

```python
airports.loc[airports['ident'] == 'KLAX', 'home_link']
```

    29141    https://www.flylax.com/
    Name: home_link, dtype: object

```python
airports.loc[airports['ident'] == 'KLAX', 'home_link'] = 'http://www.lawa.org/welcomelax.aspx'
airports.loc[airports['ident'] == 'KLAX', 'home_link']
```

    29141    http://www.lawa.org/welcomelax.aspx
    Name: home_link, dtype: object

```python
airports.loc[airports.type == 'heliport', 'home_link'] = 'http://haha'
airports[airports.type == 'heliport'][['ident', 'name', 'home_link']]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ident</th>
      <th>name</th>
      <th>home_link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>00A</td>
      <td>Total Rf Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>9</th>
      <td>00CN</td>
      <td>Kitchen Creek Helibase Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>12</th>
      <td>00FD</td>
      <td>Ringhaver Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>15</th>
      <td>00GE</td>
      <td>Caffrey Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>16</th>
      <td>00HI</td>
      <td>Kaupulehu Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>56988</th>
      <td>ZA-0117</td>
      <td>Pumba Helipad</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>56990</th>
      <td>ZA-0119</td>
      <td>Cape Town Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>57011</th>
      <td>ZA-0140</td>
      <td>Kuruman Hospital Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>57108</th>
      <td>ZIZ</td>
      <td>Zamzama Heliport</td>
      <td>http://haha</td>
    </tr>
    <tr>
      <th>57373</th>
      <td>ZZ-0001</td>
      <td>Sealand Helipad</td>
      <td>http://haha</td>
    </tr>
  </tbody>
</table>
<p>12007 rows × 3 columns</p>
</div>

# Immutability

```python
airports.home_link = 'http//hoho' # work
airports.home_link
```

    0        http//hoho
    1        http//hoho
    2        http//hoho
    3        http//hoho
    4        http//hoho
                ...    
    57371    http//hoho
    57372    http//hoho
    57373    http//hoho
    57374    http//hoho
    57375    http//hoho
    Name: home_link, Length: 57376, dtype: object

```python
airports[airports['ident'] == 'KLAX'].home_link = 'http//haha' # not work
airports[airports['ident'] == 'KLAX'].home_link
```

    d:\bin\miniconda3\envs\blog\lib\site-packages\pandas\core\generic.py:5159: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      self[name] = value

    29141    http//hoho
    Name: home_link, dtype: object

# DELETE

```sql
delete from airport_freq 
      where type = 'MISC';
```

```python
# 다시 깨끗하게 로딩하자
airport_freq = pd.read_csv('https://ourairports.com/data/airport-frequencies.csv')
```

```python
airport_freq[airport_freq.type != 'MISC']
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>70518</td>
      <td>6528</td>
      <td>00CA</td>
      <td>CTAF</td>
      <td>CTAF</td>
      <td>122.90</td>
    </tr>
    <tr>
      <th>1</th>
      <td>307581</td>
      <td>6589</td>
      <td>01FL</td>
      <td>ARCAL</td>
      <td>NaN</td>
      <td>122.90</td>
    </tr>
    <tr>
      <th>2</th>
      <td>75239</td>
      <td>6589</td>
      <td>01FL</td>
      <td>CTAF</td>
      <td>CEDAR KNOLL TRAFFIC</td>
      <td>122.80</td>
    </tr>
    <tr>
      <th>3</th>
      <td>60191</td>
      <td>6756</td>
      <td>04CA</td>
      <td>CTAF</td>
      <td>CTAF</td>
      <td>122.90</td>
    </tr>
    <tr>
      <th>4</th>
      <td>59287</td>
      <td>6779</td>
      <td>04MS</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.80</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>28903</th>
      <td>51247</td>
      <td>27242</td>
      <td>ZYTL</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>126.65</td>
    </tr>
    <tr>
      <th>28904</th>
      <td>51248</td>
      <td>27242</td>
      <td>ZYTL</td>
      <td>TWR</td>
      <td>DALIAN TWR</td>
      <td>118.25</td>
    </tr>
    <tr>
      <th>28905</th>
      <td>51243</td>
      <td>27243</td>
      <td>ZYTX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>127.45</td>
    </tr>
    <tr>
      <th>28906</th>
      <td>51244</td>
      <td>27243</td>
      <td>ZYTX</td>
      <td>TWR</td>
      <td>SHENYANG TWR</td>
      <td>118.10</td>
    </tr>
    <tr>
      <th>28907</th>
      <td>51190</td>
      <td>27244</td>
      <td>ZYYJ</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>130.00</td>
    </tr>
  </tbody>
</table>
<p>26683 rows × 6 columns</p>
</div>

```python
airport_freq.drop(airport_freq[airport_freq.type == 'MISC'].index)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }
    .dataframe tbody tr th {
        vertical-align: top;
    }
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>airport_ref</th>
      <th>airport_ident</th>
      <th>type</th>
      <th>description</th>
      <th>frequency_mhz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>70518</td>
      <td>6528</td>
      <td>00CA</td>
      <td>CTAF</td>
      <td>CTAF</td>
      <td>122.90</td>
    </tr>
    <tr>
      <th>1</th>
      <td>307581</td>
      <td>6589</td>
      <td>01FL</td>
      <td>ARCAL</td>
      <td>NaN</td>
      <td>122.90</td>
    </tr>
    <tr>
      <th>2</th>
      <td>75239</td>
      <td>6589</td>
      <td>01FL</td>
      <td>CTAF</td>
      <td>CEDAR KNOLL TRAFFIC</td>
      <td>122.80</td>
    </tr>
    <tr>
      <th>3</th>
      <td>60191</td>
      <td>6756</td>
      <td>04CA</td>
      <td>CTAF</td>
      <td>CTAF</td>
      <td>122.90</td>
    </tr>
    <tr>
      <th>4</th>
      <td>59287</td>
      <td>6779</td>
      <td>04MS</td>
      <td>UNIC</td>
      <td>UNICOM</td>
      <td>122.80</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>28903</th>
      <td>51247</td>
      <td>27242</td>
      <td>ZYTL</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>126.65</td>
    </tr>
    <tr>
      <th>28904</th>
      <td>51248</td>
      <td>27242</td>
      <td>ZYTL</td>
      <td>TWR</td>
      <td>DALIAN TWR</td>
      <td>118.25</td>
    </tr>
    <tr>
      <th>28905</th>
      <td>51243</td>
      <td>27243</td>
      <td>ZYTX</td>
      <td>ATIS</td>
      <td>ATIS</td>
      <td>127.45</td>
    </tr>
    <tr>
      <th>28906</th>
      <td>51244</td>
      <td>27243</td>
      <td>ZYTX</td>
      <td>TWR</td>
      <td>SHENYANG TWR</td>
      <td>118.10</td>
    </tr>
    <tr>
      <th>28907</th>
      <td>51190</td>
      <td>27244</td>
      <td>ZYYJ</td>
      <td>TWR</td>
      <td>TWR</td>
      <td>130.00</td>
    </tr>
  </tbody>
</table>
<p>26683 rows × 6 columns</p>
</div>
