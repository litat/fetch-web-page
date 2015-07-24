source_files	:= $(wildcard lib/*.js)
build_files	:= $(source_files:lib/%.js=build/%.js)

build/%.js: lib/%.js
	mkdir -p $(dir $@)
	uglifyjs -cbmo $@ $^

.PHONY: all test clean

all: $(build_files)

test: $(source_files)
	jshint $^
	mocha

clean:
	rm -rf build

