<img width="1865" height="962" alt="Ekran görüntüsü 2026-03-10 123453" src="https://github.com/user-attachments/assets/ba93e5ce-05d7-4640-b541-b5de25676b88" />
# Task Yönetimi Projesi – React + TailwindCSS + date-fns

Bu proje, React tabanlı bir **görev yönetim uygulaması**dır. Projede, TailwindCSS ile modern ve responsive bir tasarım, date-fns ile tarih hesaplamaları ve PropTypes ile tip kontrolü sağlanmıştır. 

Projenin amacı, şirket içi sprint veya görev yönetimi senaryolarında kullanılabilecek bir **Task bileşeni** geliştirmektir. Görevler, başlık, açıklama, teslim tarihi ve sorumlu kişiler gibi bilgileri gösterir. Teslim tarihine göre görev arka plan renkleri değişir ve kullanıcılar görevi tamamladığında “Tamamlandı” butonuna tıklayarak işlemi tamamlayabilir.

---

## Yapılan İşler ve Kullanılan Teknolojiler

### 1. React Bileşeni

- **Task.jsx** dosyasında React functional component kullanıldı.  
- Props olarak `taskObj` ve `onComplete` alıyor:  
  - `taskObj`: Görev bilgilerini içeriyor (id, title, description, deadline, people, status).  
  - `onComplete`: Görev tamamlandığında tetiklenen callback fonksiyon.  
- `PropTypes` ile props doğrulaması yapıldı.

### 2. TailwindCSS ile Stil Yönetimi

- Task bileşeni ve tüm UI elementleri TailwindCSS ile stillendirildi.  
- CSS dosyaları (`task.css`, `reset.css`) artık projede kullanılmıyor.  
- Tailwind config dosyasında özel renkler eklendi:  
  - `normal`: 3 günden fazla kalan görevler için mavi ton  
  - `urgent`: 3 günden az kalan görevler için kırmızı ton  
- Box shadow ve border-radius gibi özel stiller Tailwind theme extend ile tanımlandı.  
- index.css içinde Tailwind direktifleri eklenerek (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) proje tüm Tailwind sınıflarını kullanabilecek şekilde hazırlandı.

### 3. date-fns ile Tarih Hesaplamaları

- `parseISO` ile string formatındaki deadline tarihleri Date objesine çevrildi.  
- `differenceInDays` ile kalan gün sayısı hesaplandı.  
- `formatDistanceToNow` ve `locale: tr` kullanılarak “1 gün kaldı”, “4 gün önce” gibi Türkçe tarih metinleri oluşturuldu.  
- Kalan gün sayısına göre arka plan rengi (`bg-normal` veya `bg-urgent`) dinamik olarak değişiyor.

### 4. Component Yapısı

- Başlık (`h3`) ve açıklama (`p`) elementleri uygun font-size, renk ve spacing ile ayarlandı.  
- Deadline kutusu, kalan gün sayısına göre renk alıyor ve rounded / padding gibi stiller Tailwind ile eklendi.  
- Görev sorumluları (`people`) flex-wrap ve gap kullanılarak küçük pill şeklinde gösterildi.  
- “Tamamlandı” butonu hover efektleri ve transition ile kullanıcı deneyimi artırıldı.

### 5. Proje Yapısı

- **tailwind.config.js**: Theme extend ile özel renkler ve shadow tanımlandı.  
- **index.css**: Tailwind direktifleri eklendi, reset.css kaldırıldı.  
- **Task.jsx**: Tüm görev bileşenleri bu dosyada.  
- **App.jsx** (isteğe bağlı): Görev listesi render ediliyor ve Task componenti kullanılıyor.  

### 6. Kurulum ve Çalıştırma

1. Projeyi klonla ve dizine gir:

```bash
git clone <proje-linki>
cd <proje-klasörü>
