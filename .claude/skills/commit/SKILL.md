---
name: commit
description: 使用 git add 暫存檔案，並依照 Conventional Commits 1.0.0 規範建立 Git commit。每當使用者要求「commit」、「做一個 commit」、「git commit」、「提交變更」、「存進 git」、「把改動 commit 起來」或任何要把工作紀錄進版本控制的情境，都務必使用此 skill——即使使用者沒有明確提到「conventional commits」也一樣適用。
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*)
metadata:
  author: Lucas Yang
  version: "2026.04.21"
---

# Git Commit (Conventional Commits 1.0.0)

## 工作流程

1. 執行 `git status` 來評估狀態（已暫存、未暫存、未追蹤）
2. **若已暫存與未暫存的內容同時存在**，僅提交已暫存的部分——保留未暫存的修改不動，並簡短告知使用者此選擇，讓他們知道未暫存的檔案已被略過
3. 若尚未有任何暫存內容，自動執行 `git add -A`
4. 讀取 `git diff --cached` 以理解變更內容，接著撰寫符合 Conventional Commits 1.0.0 的訊息
5. 使用 heredoc 進行提交以保留多行格式，接著以產生的 commit hash 確認結果

## 備註

- 訊息內容使用繁體中文撰寫，但保留下列英文詞彙原文不翻譯，以維持可讀性與搜尋一致性：
  - **Conventional Commits 類型關鍵字**：`feat`、`fix`、`refactor`、`chore`、`docs`、`style`、`test`、`perf`、`build`、`ci`、`revert` 等
  - **通用技術詞彙**：如 `commit`、`merge`、`rebase`、`branch`、`lint`、`build`、`CI`、`API`、`config`、`schema` 等約定俗成的技術名詞
  - **團隊專有名詞**：`AgriWeather`、`Beehive Data Technology`、`beehivedt`（大小寫照原樣保留）
- 若沒有任何可提交的內容，明確告知並停止
- 當變更橫跨不相關的議題時，建議拆分；若使用者偏好單一 commit，則採用與主要意圖相符的類型
- **除非真的必要，否則省略 body**：優先使用單行的 subject；只有當 _why_ 或 context 無法從 diff 與 subject 推斷時，才補上 body
