# Architecture
Feature Sliced Design v2.1(latest version on the moment of 03.02.2026);

### Architectural rules
- Pages **compose**, never contain logic
- Features contain business logic
- Entities represent domain data
- Shared has no business knowledge
- Index.ts file per layer, for example: widgets/index.ts only file, no widgets/User/index.ts or widgets/User/ui/index.ts