var daunRantingX = 180;
var daunRantingY = 230;
var daunRantingDragged = false;

var plastikKalengX = 220;
var plastikKalengY = 230;
var plastikKalengDragged = false;

var b3X = 260;
var b3Y = 230;
var b3Dragged = false;

var hijauX = 100;
var hijauY = 180;
var kuningX = 225;
var kuningY = 180;
var merahX = 350;
var merahY = 180;

var daunRantingInHijau = false;
var plastikKalengInKuning = false;
var b3InMerah = false;

function setup() {
  createCanvas(470, 400);
}

function draw() {
  // Background taman
  background(152, 245, 171); // Warna hijau muda untuk rumput
  fill(0, 170, 255); // Warna biru untuk langit
  rect(0, 0, width, height / 2);

  // Bangunan Sekolah (Warna Merah)
  fill(255, 0, 0); // Warna merah untuk bangunan sekolah
  rect(50, 50, 150, 150); // Contoh bangunan sekolah, ukuran dan posisi bisa disesuaikan

  // Cendela (Jendela) Bangunan (Warna Cyan)
  fill(0, 255, 255); // Warna cyan untuk cendela bangunan
  rect(70, 70, 50, 50); // Contoh cendela, ukuran dan posisi bisa disesuaikan

  // Tong sampah hijau
  fill(0, 255, 0); // Warna hijau
  rect(50, 150, 100, 150);
  fill(0);
  rect(65, 300, 70, 10);
  fill(0);
  rect(50, 140, 100, 20);
  fill(255);
  rect(60, 140, 80, 10);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Organik", hijauX, hijauY);

  // Tong sampah kuning
  fill(255, 255, 0); // Warna kuning
  rect(175, 150, 100, 150);
  fill(0);
  rect(190, 300, 70, 10);
  fill(0);
  rect(175, 140, 100, 20);
  fill(255);
  rect(185, 140, 80, 10);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Anorganik", kuningX, kuningY);

  // Tong sampah merah
  fill(255, 0, 0); // Warna merah
  rect(300, 150, 100, 150);
  fill(0);
  rect(315, 300, 70, 10);
  fill(0);
  rect(300, 140, 100, 20);
  fill(255);
  rect(310, 140, 80, 10);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("B3", merahX, merahY);

  // Sampah Daun dan Ranting
  fill(34, 139, 34); // Warna hijau tua untuk sampah daun dan ranting
  if (daunRantingDragged) {
    daunRantingX = mouseX;
    daunRantingY = mouseY;
  }
  ellipse(daunRantingX, daunRantingY, 30, 30);
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Daun dan Ranting", daunRantingX, daunRantingY + 35);

  // Sampah Plastik dan Kaleng
  fill(255); // Warna putih untuk sampah plastik dan kaleng
  if (plastikKalengDragged) {
    plastikKalengX = mouseX;
    plastikKalengY = mouseY;
  }
  rect(plastikKalengX, plastikKalengY, 30, 30);
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Plastik dan Kaleng", plastikKalengX, plastikKalengY + 35);

  // Sampah B3
  fill(0, 255, 255); // Warna cyan untuk sampah B3
  if (b3Dragged) {
    b3X = mouseX;
    b3Y = mouseY;
  }
  triangle(b3X, b3Y, b3X - 15, b3Y + 30, b3X + 15, b3Y + 30);
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("B3", b3X, b3Y + 35);

  // Deteksi saat sampah masuk ke tong sampah hijau
  if (
    daunRantingX > 50 &&
    daunRantingX < 150 &&
    daunRantingY > 150 &&
    daunRantingY < 300
  ) {
    daunRantingInHijau = true;
  } else {
    daunRantingInHijau = false;
  }

  // Deteksi saat sampah masuk ke tong sampah kuning
  if (
    plastikKalengX > 175 &&
    plastikKalengX < 275 &&
    plastikKalengY > 150 &&
    plastikKalengY < 300
  ) {
    plastikKalengInKuning = true;
  } else {
    plastikKalengInKuning = false;
  }

  // Deteksi saat sampah masuk ke tong sampah merah
  if (
    b3X > 300 &&
    b3X < 400 &&
    b3Y > 150 &&
    b3Y < 300
  ) {
    b3InMerah = true;
  } else {
    b3InMerah = false;
  }
}

function mousePressed() {
  // Cek jika mouse menekan sampah daun dan ranting
  if (dist(mouseX, mouseY, daunRantingX, daunRantingY) < 15) {
    daunRantingDragged = true;
  }

  // Cek jika mouse menekan sampah plastik dan kaleng
  if (
    mouseX > plastikKalengX &&
    mouseX < plastikKalengX + 30 &&
    mouseY > plastikKalengY &&
    mouseY < plastikKalengY + 30
  ) {
    plastikKalengDragged = true;
  }

  // Cek jika mouse menekan sampah B3
  if (
    mouseX > b3X - 15 &&
    mouseX < b3X + 15 &&
    mouseY > b3Y &&
    mouseY < b3Y + 30
  ) {
    b3Dragged = true;
  }
}

function mouseReleased() {
  // Menyetel semua variabel dragged menjadi false ketika mouse dilepas
  daunRantingDragged = false;
  plastikKalengDragged = false;
  b3Dragged = false;

  // Mengatur posisi sampah kembali ke posisi awal jika tidak dimasukkan ke tong sampah
  if (!daunRantingInHijau) {
    daunRantingX = 180;
    daunRantingY = 230;
  }

  if (!plastikKalengInKuning) {
    plastikKalengX = 220;
    plastikKalengY = 230;
  }

  if (!b3InMerah) {
    b3X = 260;
    b3Y = 230;
  }
}
