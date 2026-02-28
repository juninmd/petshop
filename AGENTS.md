```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the consistent, maintainable, and effective development of the AGENTS repository. Adherence to these principles will significantly improve the quality and usability of the codebase.

## 1. DRY (Don't Repeat Yourself)

*   All code should be encapsulated within reusable functions, classes, and modules.
*   Identify and document potential duplication of logic.
*   Refactor code to eliminate redundant functionality.
*   Favor composition over inheritance where appropriate.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize simplicity over complexity.
*   Minimize code length and structure.
*   Use clear and concise variable names.
*   Avoid unnecessary abstraction.
*   Focus on the core requirements.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have a single, well-defined purpose.
*   **Open/Closed Principle:** The system should be extensible without modifying the existing code.  New functionality should be added through new classes/modules, not modifications to existing code.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients shouldn’t be forced to bound to methods they don’t use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the functionality required to meet the current requirements.
*   Avoid adding features or code that isn’t currently needed.
*   Focus on delivering working features first.
*   Refactor only when new requirements emerge.

## 5. Code Style & Formatting

*   Consistent code formatting (e.g., use of standard indentation, line length).
*   Follow a defined code style guide (e.g., PEP 8 for Python, etc.) – detailed guide available in README.
*   Use a code linter to catch potential errors and stylistic issues (e.g., pylint, flake8).
*   Ensure all code is properly commented.

## 6. File Limit (180 Lines Max)

*   Each file's maximum code length should be strictly 180 lines.
*   Break down large files into smaller, modular components.
*   Remove unnecessary code or comments.

## 7. Test Coverage Requirements (80%+)

*   The codebase must achieve at least 80% test coverage.
*   All functions, classes, and modules should have unit tests.
*   Test cases should be well-designed and cover critical logic.
*   Run all tests before submitting code.

## 8.  Development Process

*   **Pull Request Workflow:** All code changes must be submitted through a well-defined pull request workflow.
*   **Code Review:** All code changes are subject to peer review before merging.
*   **Automated Tests:**  All tests are automatically executed after each commit.
*   **Documentation:** Maintain clear and concise documentation for all code and APIs.

## 9.  Specific File Templates & Structure (Example - Adapt to your needs)

*   **`src/base/agent.py`:**  Contains the core agent logic and definitions.
*   **`src/agent/agent.py`:** Contains specific agent functionalities.
*   **`src/utils/data_handler.py`:**  Handles data processing logic.
*   **`src/api/handler.py`:**  API endpoint handler functions.
*   **`src/tests/test_agent.py`:**  Unit and integration tests for the agent.
*   **`src/docs/api_reference.md`:**  API documentation.

## 10.  Tools & Technologies

*   Utilize a version control system (e.g., Git).
*   Use a code linter and formatter.
*   Employ a testing framework (e.g., pytest, unittest).

These guidelines are intended as a starting point and may require adjustments as the project evolves.  Regular review and updates are essential to maintain the quality of the AGENTS repository.
```