import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		exclude: [
			...configDefaults.exclude,
			"src/lib/commit.spec.ts",
			"src/lib/create-repo.spec.ts",
			"src/lib/delete-file.spec.ts",
			"src/lib/delete-files.spec.ts",
			"src/lib/upload-file.spec.ts",
			"src/lib/upload-files.spec.ts",
			"src/lib/upload-files-with-progress.spec.ts",
		],
	},
});
