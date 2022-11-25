<h2> "Encapsulation, Getter ve Setter" nedir ? araştırınız. Encapsulation ile Getter, Setter ilişkisini araştırıp açıklayınız. </h2>
<ul>
  <li>Nesne yönelimli programlamanın ilk prensibi kapsülleme (encapsulation) olarak adlandırılır. Bu özellik, dilin nesne kullanıcısından gereksiz uygulama ayrıntılarını saklar. Oluşturulan bir sınıf (class) içerisinde kullanıcının işlemlerini daha kolay gerçekleştirebilmesi için bazı işlemler birleştirilerek tek bir işlem gibi gösterilir. Bu birleştirme işlemine kapsülleme denir.</li>
  <li>Bir sınıf içerisinden farklı bir sınıf içerisinde ki nesneye ulaşmak istiyorsak özellik metotlarını kullanmalıyız.</li>
  <li>Özellik metotları GET ve SET anahtar kelimesinden oluşan iki kod bloğundan oluşurlar. GET metodu veri okunduğu zaman, SET metodu ise veri yazıldığı zaman (yani değer ataması yapıldığı zaman) yürütülür. </li>
  <li>Özellik olarak bu iki anahtar kelimeyi aynı anda kullanabildiğimiz gibi, tek anahtar kelime ile de oluşturabiliriz. Örneğin sadece GET metodu ile oluşturduğumuz özellik sadece okunabilir, SET metodu ile oluşturduğumuz özellik ise sadece yazılabilir bir hal alır. Her iki anahtar kelimeyle oluşturduğumuz özellik ise hem okunabilir hem de yazılabilir özelliğe dönüşür.</li>
  <li>Bir Class içerisinde bulunan bazı alanlara her zaman ulaşmak gerekmez. Çünkü bir nesneyi sürekli ulaşılabilir hale getirmek bilinçsiz kullanım, veri kaybı ve güvenliği gibi sorunları ortaya çıkartır.</li>
  <li>Zaten nesneleri tanımlarken varsayılan değer olarak “Private” erişim belirleyicisi olarak tanımlanması da bu tip gerekçelerden kaynaklanır. “Public” erişim belirleyicisi ise tamamen açık hale getirir. İşte tam bu noktada nesnelerimizin erişimini yönetmek için “Property” kavramı devreye girer. “Property” yani Özellik metotları nesnelerimiz üzerinde kontrollü kullanım sağlar.</li>
</ul>

<h2> "Route Param, Query Param" nedir, niçin kullanılır ? Araştırınız. </h2>
<ul>
  <li>"Route params" ve "Query params", belirli bir REST API kaynağına işaret eden bir URL'ye farklı şekillerde eklenmiş istek parametreleridir. "Route params" url'den bir `/` ve "Query params" ise bir soru işareti ('?`) yardımı ile ayrılır.</li>
  <li> "Route params" kaynak konumunu, "Query params" ise sıralama, sayfalandırma veya filtreleme işlemlerini tanımlar.</li>
  <li> Kullanıcının girişi (sorgu) "Query params"'da bir değişken olarak geçirilirken, istemci bir API çağrısı yaptığında her "route param"'ın gerçek bir değerle değiştirilmesi gerekir. "route params" süslü parantezleri içinde bulunur.</li>
  <li> "Query params" nasıl bakılacağını açıklarken, "Route params" programınıza nereye bakacağınızı gösterir. "Route params", bitiş noktası URI'nın bir parçasıdır ve bir değere sahip olması gerekir. "Route params", bitiş noktası URL'deki dosya sistemi olarak düşünün ve isteği aradığı cevaba yönlendirin.</li>
</ul>
