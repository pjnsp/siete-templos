---
name: git-commit-push-pr
description: Analyzes working tree changes, stages files, commits with emoji-prefixed conventional messages (NEW / IMPROVE / FIX), and pushes to a new remote branch for opening a pull request. Use when the user asks to commit and push, prepare a PR branch, or ship local changes with a structured commit message.
---

# Commit, message, and push for a PR

## When to use

Apply when the user wants local changes committed and pushed on a **new branch** so they can open a PR.

## Message prefix rules

Pick **one** primary prefix per commit from the change set:

| Prefix | Use when |
|--------|------------|
| `📦 NEW:` | New user-visible capability, route, component, data source, or behavior that did not exist before |
| `👌 IMPROVE:` | Refinements, UX polish, performance, accessibility, typing, refactor with no intended behavior change |
| `🐛 FIX:` | Correcting incorrect behavior, regressions, build or runtime errors |

**Body:** After the subject line, add a short imperative body if the diff is non-obvious (what changed and why).

**Mixed diffs:** Prefer **one logical commit** with the prefix that matches the **main intent**. If the work is clearly unrelated (e.g. feature + unrelated fix), offer **two commits** on the same branch or ask which to prioritize.

## Workflow

1. **Inspect:** `git status` and `git diff` (and `git diff --staged` if anything is already staged). Summarize files and intent.
2. **Branch:** If not already on a dedicated branch, create and switch: `git checkout -b <type>/<short-slug>`  
   Examples: `feat/stations-list-style`, `fix/date-parse-error`, `improve/lint-cleanup`
3. **Quality gate:** If the project documents a post-change check (e.g. lint), run it before commit when edits are substantive.
4. **Stage:** `git add` only the paths that belong in this commit (avoid `git add .` when unrelated files are dirty).
5. **Commit:**  
   `git commit -m "📦 NEW: concise subject"` (or `👌 IMPROVE:` / `🐛 FIX:`)  
   Use `git commit` without `-m` only if a multi-line message is needed.
6. **Push:** `git push -u origin HEAD` (or `git push -u origin <branch-name>`).

## Safety checks

- Do not force-push to `main` / `master` / protected branches.
- Do not commit secrets, `.env` with real credentials, or large generated artifacts unless the user explicitly wants them tracked.
- If the user has **no** network permission, stop after commit and say push is pending.

## Example messages

```
📦 NEW: add station filter to list view

👌 IMPROVE: tighten spacing and focus styles on stations list

🐛 FIX: restore correct scroll position after navigation
```
