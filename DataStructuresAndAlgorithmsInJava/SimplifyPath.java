public class SimplifyPath {
    public String simplifyPath(String path) {
        String[] token = path.split("/");
        Deque<String> stack = new ArrayDeque<>();
        for (String s : token) {
            if (s.trim().isEmpty() || ".".equals(s)) {
                continue;
            } else if ("..".equals(s)) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                stack.push(s);
            }
        }
        List<String> result = new ArrayList<>();
        while (!stack.isEmpty()) {
            result.add(0, stack.pop());
        }
        return "/" + String.join("/", result);
    }

}
