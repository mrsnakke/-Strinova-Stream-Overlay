<!-- Botón para saltar a la versión en Español -->
[![Español](https://img.shields.io/badge/Español%20🇪🇸-C60B1E?style=for-the-badge)](#-versión-en-español)

# 🌟 Strinova Rank Overlay for OBS

Widget for **Strinova** streamers. Display your current rank, tier, skill rating (SR), win/loss counter, and progress bar, all updatable in real-time without ever leaving OBS Studio.
<img width="1680" height="853" alt="image" src="https://github.com/user-attachments/assets/968af10c-1ccc-4aaf-8c79-e14e9bf1e478" />

## ✨ Features
- **Dynamic Themes:** Automatically changes colors and styles based on your selected rank (Substance, Molecule, Atom, etc.).
- **Segmented Progress Bar:** Visual tracker for your Strinovium Points (1-100).
- **Smooth Animations:** Glow effects and smooth transitions when stats are updated.
- **Built for OBS:** Includes a Control Panel that docks directly into your OBS interface.
- **Easy to Use:** No extra software installation required; it runs entirely within OBS's internal browser.

---

## 🚀 How to Install and Configure in OBS
<img width="2558" height="1402" alt="image" src="https://github.com/user-attachments/assets/e576ebdc-7d2e-46a6-ae9f-43d3faedbe45" />

This project consists of two parts:
1. The **Control Panel** (`control.html`): Where you change the data.
2. The **Overlay** (`overlay.html`): What your viewers see on stream.

Follow these steps to add both to your OBS Studio.

### STEP 1: Add the Control Panel to OBS

Let's embed the configuration window directly into your OBS so it's always handy.

1. Open the folder where you downloaded these files.
2. Open the `control.html` file in your regular web browser (Chrome, Edge, etc.).
3. Copy the address (URL) at the top of your browser. It will look something like: `file:///C:/Users/.../control.html` (or your web link if you hosted it online).
4. Open **OBS Studio**.
5. In the top menu, go to **Docks** > **Custom Browser Docks...**.
6. Under the **Dock Name** column, type something like: `Strinova Control`.
7. Under the **URL** column, paste the link you copied in step 3.
8. Click **Apply** and then **Close**.
9. You're done! A floating window will appear. You can drag and dock it anywhere in your OBS layout (e.g., next to your chat).

### STEP 2: Add the Overlay to your Stream

Now let's put the graphic on your screen for the viewers.

1. In OBS, go to your **Sources** panel and click the **+** button.
2. Select **Browser**.
3. Name it, for example: `Strinova Rank` and click OK.
4. **If using local files:** Check the **"Local file"** box, click **Browse**, and select the `overlay.html` file from your folder.
   **If hosted online:** Paste the direct link to your `overlay.html` in the URL box.
5. Set the dimensions:
   - **Width:** `400`
   - **Height:** `600`
6. (Optional) Delete everything in the "Custom CSS" box to avoid visual conflicts.
7. Click **OK**.
8. Position and scale the overlay on your OBS canvas wherever you like.

---

## 🎮 How to use it?

1. Go to your new docked Control Panel in OBS.
2. Select your current rank and tier.
3. Update your Score (SR) and use the `+` and `-` buttons for your Wins (W) and Losses (L).
4. The overlay on your stream will react and update automatically with a cool flash animation.

---

## 🛠️ Troubleshooting

**Issue:** I change the data in the control panel, but the overlay on the stream doesn't update.
**Fix:** For security reasons, OBS sometimes blocks communication between local files (`file:///`). 
1. Double-click your `Strinova Rank` source in OBS to open its properties.
2. Scroll to the very bottom and click the **"Refresh cache of current page"** button.

---

## Social Media

[![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white)](https://www.twitch.tv/mrsnakevt)
[![Kick](https://img.shields.io/badge/Kick-50FF78?style=for-the-badge&logo=kick&logoColor=white)](https://kick.com/mrsnakevt)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@MrSnake_VT)
[![X (Twitter)](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/MrSnakeVT)

---

<br><br><br>

---

<!-- Botón para volver a la versión en Inglés -->
[![English](https://img.shields.io/badge/English%20🇬🇧-012169?style=for-the-badge)](#-strinova-rank-overlay-for-obs)

# 🇪🇸 Versión en Español

Un widget visual, elegante y animado para streamers de **Strinova**. Muestra tu rango actual, nivel, puntos de clasificación (SR), contador de victorias/derrotas y tu barra de progreso, todo actualizable en tiempo real sin tener que salir de OBS.
<img width="1680" height="853" alt="image" src="https://github.com/user-attachments/assets/d30cfb90-1b2c-4426-9ec8-7816db869086" />

## ✨ Características
- **Diseño Dinámico:** Cambia de color y estilo automáticamente según el rango seleccionado (Substance, Molecule, Atom, etc.).
- **Barra de Progreso:** Barra segmentada visual para rastrear tus puntos Strinovium (1-100).
- **Animaciones fluidas:** Efectos de brillo y transiciones suaves al actualizar los datos.
- **Todo en OBS:** Incluye un Panel de Control que se integra directamente en la interfaz de tu OBS Studio.
- **Fácil de usar:** No requiere instalación de programas extra, funciona directamente con el navegador interno de OBS.

---

## 🚀 ¿Cómo instalarlo y configurarlo en OBS?

Este proyecto consta de dos partes:
1. El **Panel de Control** (`control.html`): Donde tú (el streamer) cambias los datos.
2. El **Overlay** (`overlay.html`): Lo que ven tus espectadores en el stream.

A continuación, te explicamos cómo añadir ambas partes a tu OBS Studio.
<img width="2558" height="1402" alt="image" src="https://github.com/user-attachments/assets/b38d5e3d-005d-48a5-b38d-a80bb5759cd3" />

### PASO 1: Añadir el Panel de Control a tu OBS

Vamos a incrustar la ventana de configuración directamente en tu OBS para que la tengas a mano.

1. Abre la carpeta donde descargaste estos archivos.
2. Abre el archivo `control.html` en tu navegador web normal (Chrome, Edge, etc.).
3. Copia la dirección (URL) que aparece arriba en tu navegador. Se verá algo como: `file:///C:/Users/.../control.html`.
4. Abre **OBS Studio**.
5. En el menú superior, ve a **Paneles** (D) > **Paneles de navegador personalizados...**.
6. En la columna **Nombre del panel**, escribe: `Control Strinova`.
7. En la columna **URL**, pega la dirección que copiaste en el paso 3.
8. Haz clic en **Aplicar** y luego en **Cerrar**.
9. ¡Listo! Aparecerá una ventana flotante. Puedes arrastrarla y acoplarla en cualquier lado de tu OBS (por ejemplo, al lado del chat).

### PASO 2: Añadir el Overlay a tu Stream

Ahora pondremos el gráfico en tu pantalla.

1. En OBS, ve a tu panel de **Fuentes** (Sources) y haz clic en el botón **+**.
2. Selecciona **Navegador** (Browser).
3. Ponle un nombre, por ejemplo: `Rango Strinova` y dale a Aceptar.
4. **Si usas archivos locales de tu PC:** Marca la casilla **"Archivo local"** (Local file), haz clic en **Examinar** y selecciona el archivo `overlay.html` de tu carpeta.
   **Si lo subiste a internet:** Pega el link directo a tu `overlay.html` en la casilla URL.
5. Configura el tamaño:
   - **Ancho:** `400`
   - **Alto:** `600`
6. (Opcional) Borra todo lo que haya en la casilla "CSS personalizado" para evitar conflictos visuales.
7. Haz clic en **Aceptar**.
8. Acomoda el overlay en tu pantalla de OBS donde más te guste.

---

## 🎮 ¿Cómo se usa?

1. Ve a tu nuevo Panel de Control acoplado en OBS.
2. Selecciona tu rango actual y tu nivel.
3. Actualiza tus Puntos (Score) y usa los botones de `+` y `-` para tus Victorias (W) y Derrotas (L).
4. El overlay en tu stream reaccionará y se actualizará automáticamente con una animación.

---

## 🛠️ Solución de Problemas (Troubleshooting)

**Problema:** Cambio los datos en el panel de control, pero el overlay en el stream no se actualiza.
**Solución:** Por medidas de seguridad, OBS a veces bloquea la comunicación entre archivos locales (`file:///`). 
1. Haz doble clic en tu fuente `Rango Strinova` en la lista de fuentes de OBS.
2. Baja hasta el fondo de la ventana y haz clic en el botón **"Actualizar la caché de la página actual"** (Refresh cache of current page).

---

## Social Media

[![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white)](https://www.twitch.tv/mrsnakevt)
[![Kick](https://img.shields.io/badge/Kick-50FF78?style=for-the-badge&logo=kick&logoColor=white)](https://kick.com/mrsnakevt)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@MrSnake_VT)
[![X (Twitter)](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/MrSnakeVT)

---

