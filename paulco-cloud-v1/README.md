# Paulco Cloud v1

A Python-based OpenStack dashboard and management tool.

---

## Features

- OpenStack resource management via [openstacksdk](https://docs.openstack.org/openstacksdk/latest/)
- Web dashboard with user authentication
- Project, instance, and volume management
- Responsive UI with custom themes

---

## Prerequisites

- **Python 3.8+** (recommended: Python 3.12)
- **pip** (Python package manager)
- **virtualenv** or **venv** module

---

## Quick Start

### 1. Install System Dependencies

```sh
sudo apt update
sudo apt install python3 python3-venv python3-pip
```

### 2. Set Up a Virtual Environment

```sh
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Python Dependencies

```sh
pip install -r requirements.txt
```

> If you encounter permission issues, try:
> 
> ```sh
> pip install --break-system-packages -r requirements.txt
> ```

### 4. Configure OpenStack

- Edit `clouds.yaml` or `clouds1.yaml` with your OpenStack credentials.
- (Optional) Set environment variables in a `.env` file.

### 5. Run the Application

```sh
python app.py
```

- The app will start on [http://localhost:5000](http://localhost:5000) by default.

---

## Useful Commands

- Check OpenStack SDK version:
  ```sh
  python -m openstack version
  ```
- Run other scripts:
  ```sh
  python op_create.py
  python dashboard.py
  ```

---

## Project Structure

```
paulco-cloud-v1/
├── app.py                # Main application entry point
├── requirements.txt      # Python dependencies
├── clouds.yaml           # OpenStack config
├── static/               # CSS, JS, images, icons
├── templates/            # HTML templates
├── instance/             # Database and instance files
├── ...
```

---

## License

[MIT](LICENSE) © 2025 Paulco Cloud Team

---

## Support

For issues or feature requests, please open an [issue](https://github.com/your-repo/issues) or
