---
sidebar_position: 4
---

# Monorepo

Monorepo projects only need [PackageManager](/docs/guides/topic-detail/generator/config/common#packagemanager).

## Create subproject

The Monorepo project supports the creation of sub-projects by using the new command. The sub-project type supports application, test application, module, internal module. In addition to the respective configuration of the application and module, some general sub-project configuration is required here.

### solution

Subproject type(solution)，the different subproject type fields are:

- Application (mwa)
- Application (Test) (mwa_test)
- Module
- Modules (internal) (inner_module)

### packageName

Subproject name (packageName), character `string` type.

### packagePath

Subproject path (packagePath), character `string` type.